import { ITask, TTaskState } from '../types/Task';

const BASE_URL = 'http://localhost:3004/tasks'

export async function fetchTasks(state: TTaskState = 'all'): Promise<ITask[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`

  const res = await fetch(`${BASE_URL}/${queries}`)

  if (!res.ok) throw new Error('Ошибка при получении задач!')

  return res.json()
}

export async function toggleTasksStatus(taskId: number, completed: boolean) {
  const res = await fetch(`${BASE_URL}/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}

export async function createTask(title: string) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ title, completed: false }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json()
}
