// import { type Todo } from '../components/Home.vue'
export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
  editMode: boolean
}

export async function fetchData(todos: Todo[] | null): Promise<Todo[] | null> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('failed to fetch data')
    }
    todos = await response.json()
  } catch (error) {
    console.error(error)
  }
  return todos
}
