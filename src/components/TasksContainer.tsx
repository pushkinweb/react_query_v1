import { Button, Divider, Stack } from '@mui/material';
import { useState } from 'react';
import { TTaskState } from '../types/Task';
import { TaskList } from './TaskList';
import { NewTask } from './NewTask';

const TasksContainer = () => {
  const [view, setView] = useState<TTaskState>('all');

  return (
    <Stack>
      <div className={'HeaderGroup'}>
        <div className={'ButtonGroup'}>
          <Button
            variant={view === 'all' ? 'outlined' : 'text'}
            onClick={() => setView('all')}
          >
            Все
          </Button>
          <Button
            variant={view === 'open' ? 'outlined' : 'text'}
            onClick={() => setView('open')}
          >
            (Не)выполненные
          </Button>
          <Button
            variant={view === 'completed' ? 'outlined' : 'text'}
            onClick={() => setView('completed')}
          >
            Выполненные
          </Button>
        </div>

        <NewTask />
      </div>

      <Divider />
      <TaskList state={view} />
      <Divider />
    </Stack>
  );
};

export { TasksContainer };
