import { Button, Input, Stack } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createTask } from '../services/TasksService';
import { ITask } from '../types/Task';

const NewTask = () => {
  const [title, setTitle] = useState('');

  const client = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: createTask,
    /*onSuccess: () => {
      client.invalidateQueries({ queryKey: ['tasks', 'all'] });
    },*/
    onSuccess: (newTask) => {
      //oldTasks = client.getQueryData(['tasks', 'all'])
      client.setQueriesData<ITask[]>(['tasks', 'all'], (oldTasks) => {
        return [...(oldTasks || []), newTask];
      });
    },
  });

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      create(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack className={'FormAddTask'} direction="row">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Добавить задачу..."
        />
        <Button variant="contained" type="submit" >Добавить</Button>
      </Stack>
    </form>
  );
};

export { NewTask };
