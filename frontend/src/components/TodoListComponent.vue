<script setup lang="ts">
import { ref } from 'vue';

defineProps(["todoList"])
const description = ref('')
</script>

<template>
  <main>
    
    <header>
      <input type="text" v-model="description" @keyup.enter="todoList.addItem(description)" placeholder="Add new todo">
    
      <p>Tasks completed: <span >{{ todoList.getCompleted() }}%</span></p>
    </header>
    
    <div v-if="todoList.items.length <= 0">
      <h2>No Items</h2>
    </div>

    <ul v-for="item in todoList.items">
      <li>
        <p :class="{ 'done': (item.done) }">{{ item.description }}</p>
      <div class="actions">
        <button @click="todoList.toggleDone(item)">{{ item.done ? 'Undone' : 'Done'}}</button>
        <button @click="todoList.removeItem(item)">Delete</button>
      </div>
      </li>
    </ul>

    
  
    <hr>
  
  </main>

</template>

<style scoped>
  main {
    padding: 1.25rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  header {
    flex: 1;
    border-bottom: 1px solid rgb(173, 173, 176);

    display: flex;
    flex-direction: column;
  }

  header input[type="text"]{
    height: 2rem;
    line-height: 2.125rem;
    border: 1px solid rgb(172, 168, 168);
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    

  }

  header input[type="text"]::placeholder{
    color: rgb(173, 173, 176);
  }

  header p {
    font-size: 0.825rem;
    color: #999;
    transition: all .2s;
  }

  header span {
    font-size: 0.825rem;
    font-weight: 900;
    color: rgb(52, 121, 211);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .done {
    text-decoration: line-through;
    color: rgb(186, 182, 182);
  }

  li {
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0.25rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  button {
    border-radius: 0.125rem;
    border: none;
    padding: 0.25rem;
    transition: all .2s;

    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }

  li > div > button {
    margin-right: 0.25rem;
    background: linear-gradient(35deg,#0092CF, #EF48FE) ;
    color: white;
  }

  
  li > div button:last-child{
    background: tomato;
    color: white;
  }

  


  
</style>
