<template>
  <div class="badass-todo mt-5">
    <div class="title has-text-centered">Vue.js Todo</div>
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input v-model="newTodo" class="input" type="text" placeholder="Ajouter une tache">
        </p>
        <p class="control">
          <button class="button is-primary" :disabled="!newTodo">
            Ajouter
          </button>
        </p>
      </div>
    </form>

    <div v-for="todo in todoLists" class="card mb-5" :class="{ 'has-background-success-light': todo.done }">
      <div class="card-content">
        <div class="content">
          <div class="todo-title" :class="{ 'has-text-success line-through': todo.done }">
            {{  todo.content  }}
          </div>
          <div class="todo-actions buttons">
            <button class="button is-small is-light " :class="todo.done ? 'is-success' : 'is-light'"
              @click="toggleDone(todo.id)">
              &check;
            </button>
            <button @click="deleteTodo(todo.id)" class="button is-small is-danger ml-2">
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

import { ref, onMounted } from 'vue';
import { db } from '@/firebase'
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from "firebase/firestore";

const todosCollectionRef = collection(db, "todos")
const todosCollectionsQuery = query(todosCollectionRef, orderBy("date", "desc"))

const newTodo = ref('')

const todoLists = ref([
])

// Get todos from firebase
onMounted(() => {
  onSnapshot(todosCollectionsQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
    });
    todoLists.value = fbTodos
  })
})

// Add todo to firebase
const addTodo = () => {
  addDoc(todosCollectionRef, {
    content: newTodo.value,
    done: false,
    date: Date.now()
  });
  newTodo.value = ''
}

// delete todo from firebase
const deleteTodo = id => {
  deleteDoc(doc(todosCollectionRef, id));

}

// Updating done task in firebase
const toggleDone = id => {
  const index = todoLists.value.findIndex(todo => todo.id === id)
  updateDoc(doc(todosCollectionRef, id), {
    done: !todoLists.value[index].done
  });
}


</script>