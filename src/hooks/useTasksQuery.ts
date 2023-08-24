import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { fetchTasks } from '../services/TasksService';
import { TTaskState } from '../types/Task';

const useTasksQuery = (state: TTaskState) => {
  const { enqueueSnackbar: messageComponent } = useSnackbar();


  return useQuery({
    queryFn: () => fetchTasks(state),
    queryKey: ['tasks', state],
    staleTime: 1000 * 5,
    enabled: true,
    onSuccess: (res) => {
      messageComponent('Задачи получены', {variant: 'success'})
    },
    onError: (err) => {
      if (err instanceof Error) {
        messageComponent(err.message, {variant: 'error'})
      }
    }
  });
};

export { useTasksQuery };
