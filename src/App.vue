<template>
  <div class="badass-todo mt-5">
    <div class="title has-text-centered">Vue.js Todo</div>
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input v-model="newTodoContent" class="input" type="text" placeholder="Ajouter une tache">
        </p>
        <p class="control">
          <button class="button is-primary" :disabled="!newTodoContent">
            Ajouter
          </button>
        </p>
      </div>
    </form>

    <div v-for="todo in todos" class="card mb-5" :class="{ 'has-background-success-light': todo.done }">
      <div class="card-content">
        <div class="content">
          <div class="todo-title" :class="{ 'has-text-success line-through': todo.done }">
            {{ todo.content }}
          </div>
          <div class="todo-actions buttons">
            <button class="button is-small is-primary is-light" :class="todo.done ? 'is-success' : 'is-light'"
              @click="toggleDone(todo.id)">
              &check;
            </button>
            <button @click="deleteTodo(todo.id)" class="button is-small is-danger is-light ml-2">
              &cross;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';

.badass-todo {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.line-through {
  text-decoration: line-through;
}
</style>

<script setup>

import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const todos = ref([
])

//todo to be add
const newTodoContent = ref('')

// Add todo
const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newTodoContent.value = ''
}


//delete todo
const deleteTodo = id => {
  todos.value = todos.value.filter(todo => {
    todo.id !== id
  })
}

//marking done
const toggleDone = id => {
  console.log()
  const index = todos.value.findIndex(todo => todo.id === id)
  todos.value[index].done = !todos.value[index].done
}

</script>