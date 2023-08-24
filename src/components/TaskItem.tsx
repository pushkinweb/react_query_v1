import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTasksStatus } from '../services/TasksService';
import { Checkbox, FormControlLabel, ListItem, Stack } from '@mui/material';
import { ITask } from '../types/Task';


const TaskItem = ({ completed, id, title }: ITask) => {
  const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTasksStatus(id, !completed),
    onSuccess: () => client.invalidateQueries(['tasks']),
  });

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={() => toggle()}>
        <FormControlLabel control={<Checkbox checked={completed} />} label={title} />
      </Stack>
    </ListItem>
  );
};

export { TaskItem };
