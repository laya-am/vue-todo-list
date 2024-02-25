<script setup lang="ts">
import { ref } from 'vue'
import { type Todo } from './Home.vue'

const editedText = ref<string>('')
let editedTodo = ref<Todo | null>(null)

const props = defineProps<{
  todos: Todo[] | null
  todoId: number
}>()

async function editTodo(idToBeEdited: number) {
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
  const todoToUpdate = props.todos?.find((t) => t.id === idToBeEdited)
  if (todoToUpdate) {
    todoToUpdate.title = editedText.value
    todoToUpdate.editMode = false
  }
  editedText.value = ''
}
</script>
<template>
  <form @submit.prevent="() => editTodo(todoId)">
    <input v-model="editedText" type="text" name="todo" />
    <button>submit</button>
  </form>
</template>
