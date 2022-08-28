<template>
  <div class="badass-todo mt-5">
    <div class="title has-text-centered">Vue.js Todo</div>
    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Ajouter une tache">
      </p>
      <p class="control">
        <a class="button is-primary">
          Ajouter
        </a>
      </p>
    </div>
    <div v-for="todo in todos" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="todo-title">
            {{todo.content}}
          </div>
          <div class="todo-actionsbuttons">
            <button class="button is-small is-primary is-light">
              &check;
            </button>
            <button class="button is-small is-danger is-light ml-2">
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
</style>

<script setup>

  import { ref } from 'vue';
  
  const todos = ref([
    {
      id:'id1',
      content: 'Lire un livre',
      done: false
    },
    {
      id:'id2',
      content: 'Lire un livre',
      done: false
    },
    {
      id:'id3',
      content: 'Lire un livre',
      done: false
    }
  ])

</script>