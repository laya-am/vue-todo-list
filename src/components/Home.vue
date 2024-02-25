<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchData } from '../assets/fetch'
import EditForm from './EditForm.vue'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
  editMode: boolean
}
const todos = ref<Todo[] | null>([])

async function deleteTodo(idToBeDeleted: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idToBeDeleted}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('failed to delete the item')
  }
  todos.value = todos.value!.filter((t) => t.id !== idToBeDeleted)
  console.log('successfully deleted the item.')
}

onMounted(async () => (todos.value = await fetchData(todos.value)))
</script>
<template>
  <h1>all tasks</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id.toString" :class="{ done: todo.completed }">
      <div v-if="!todo.editMode">
        <input
          type="checkbox"
          name="checkbox"
          :value="todo.completed"
          @input="todo.completed = !todo.completed"
        />
        <span>{{ todo.title }}</span>
        <button @click="() => deleteTodo(todo.id)">Delete</button>
        <button @click="todo.editMode = !todo.editMode">Edit</button>
      </div>
      <EditForm v-else :todos="todos" :todoId="todo.id" />
    </li>
  </ul>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
