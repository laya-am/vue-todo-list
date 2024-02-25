<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

interface Todo {
  userId: Number
  id: Number
  title: String
  completed: Boolean
  editMode: Boolean
}
const todos = ref<Todo[] | null>([])
const editedText = ref<String>('')
let editedTodo = ref<Todo | null>(null)

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('failed to fetch data')
    }
    todos.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

// onUnmounted(() => {
//   editedText.value = ''
// })

async function deleteTodo(idToBeDeleted: Number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idToBeDeleted}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('failed to delete the item')
  }
  todos.value = todos.value.filter((t) => t.id !== idToBeDeleted)
  console.log('successfully deleted the item.')
}
async function editTodo(idToBeEdited: Number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idToBeEdited}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: editedText.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  if (!response.ok) {
    throw new Error('failed to edit the item')
  }
  editedTodo = await response.json()
  console.log('successfully edited the item.', editedTodo)
  todos.value!.find((t) => t.id === idToBeEdited)!.title = editedText.value
  editedText.value = ''
  todos.value!.find((t) => t.id === idToBeEdited)!.editMode = false
}

fetchData()
</script>
<template>
  <h1>all tasks</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id.toString" :class="{ done: todo.completed }">
      <span v-if="!todo.editMode"
        >{{ todo.title }}
        <button @click="() => deleteTodo(todo.id)">Delete</button>
        <button @click="todo.editMode = !todo.editMode">Edit</button>
      </span>
      <form v-else @submit.prevent="() => editTodo(todo.id)">
        <input v-model="editedText" type="text" name="todo" />
        <button>submit</button>
      </form>
    </li>
  </ul>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
