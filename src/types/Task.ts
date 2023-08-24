export type TTaskState = 'all' | 'open' | 'completed'

export interface ITask {
  id: number
  completed: boolean
  title: string
}
