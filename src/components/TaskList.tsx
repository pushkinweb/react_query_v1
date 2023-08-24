import { useTasksQuery } from '../hooks/useTasksQuery';
import { TTaskState } from '../types/Task';
import { TaskItem } from './TaskItem';
import { CircularProgress, List } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../services/TasksService';
import { useSnackbar } from 'notistack';

interface ITaskListProps {
  state: TTaskState;
};

const TaskList = ({ state }: ITaskListProps) => {

  const { data, isLoading, isSuccess, isError } = useTasksQuery(state);

  if (isLoading)
    return (
      <CircularProgress />
    );

  if (isError)
    return (
      <div className={'ErrorMessage'}>
        Задач нет....
      </div>
    );

  return (
    <List>
      {isSuccess && data.map((task) => <TaskItem key={task.id} {...task} />)}
    </List>
  );
};

export { TaskList };
