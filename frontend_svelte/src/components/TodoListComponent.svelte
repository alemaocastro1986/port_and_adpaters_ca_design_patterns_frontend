<script lang="ts">
  import type TodoList from "../entities/TodoList";

  export let todoList: TodoList;
  let description: string = "";

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      todoList.addItem(description);
    }
  }

  $: todos = todoList.items;
</script>

<main>
  <header>
    <input
      type="text"
      bind:value={description}
      on:keydown={onKeyDown}
      placeholder="Add new todo"
    />

    <p>Tasks completed: <span>{todoList.getCompleted()}%</span></p>
  </header>

  {#if todoList.items.length <= 0}
    <div>
      <h2>No Items</h2>
    </div>
  {/if}
  <div>
    <h2>No Items</h2>
  </div>

  <ul>
    {#each todos as todo}
      <li>
        <p class:done={todo.done}>{todo.description}</p>
        <div class="actions">
          <button on:click={() => todoList.toggleDone(todo)}
            >{todo.done ? "Undone" : "Done"}</button
          >
          <button on:click={() => todoList.removeItem(todo)}>Delete</button>
        </div>
      </li>
    {/each}
  </ul>

  <hr />
</main>

<style>
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

  header input[type="text"] {
    height: 2rem;
    line-height: 2.125rem;
    border: 1px solid rgb(172, 168, 168);
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  }

  header input[type="text"]::placeholder {
    color: rgb(173, 173, 176);
  }

  header p {
    font-size: 0.825rem;
    color: #999;
    transition: all 0.2s;
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
    transition: all 0.2s;

    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }

  li > div > button {
    margin-right: 0.25rem;
    background: linear-gradient(35deg, #0092cf, #ef48fe);
    color: white;
  }

  li > div button:last-child {
    background: tomato;
    color: white;
  }
</style>
