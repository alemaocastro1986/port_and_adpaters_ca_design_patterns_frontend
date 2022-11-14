<script lang="ts">
  import { getContext, onMount } from "svelte";

  import { Observer } from "../entities/Observer";
  import TodoList from "../entities/TodoList";
  import type TodoGateway from "../gateways/TodoGateway";

  import TodoListComponent from "./TodoListComponent.svelte";

  const todoGateway = getContext("todoGateway") as TodoGateway;
  let todoListData = new TodoList();

  onMount(async () => {
    const todoList = await todoGateway.getTodos();

    todoList.register(
      new Observer("ADD_ITEM", async function (item: any) {
        await todoGateway.addItem(item);
        todoListData = todoList;
      })
    );

    todoList.register(
      new Observer("REMOVE_ITEM", async function (item: any) {
        await todoGateway.removeItem(item);
        todoListData = todoList;
      })
    );

    todoList.register(
      new Observer("TOGGLE_DONE_ITEM", async function (item: any) {
        await todoGateway.updateItem(item);
        todoListData = todoList;
      })
    );

    todoListData = todoList;
  });
</script>

<div class="todos">
  <header class="todos-header">
    <h1>Todos</h1>
    <p>
      Criado usando conceitos de Clean Arch, Clean code, Exagonal Arch (ports
      and adapters)
    </p>
  </header>
  <TodoListComponent bind:todoList={todoListData} />
  <footer class="todos-footer">
    <p>
      Criando na live do canal <a
        href="https://www.youtube.com/watch?v=kCSiGeUFi_U&t=755s"
        >Rodrigo Branas</a
      >
    </p>
  </footer>
</div>

<style>
  .todos {
    margin: 0 auto;
    width: 100%;
    max-width: 25rem;
  }

  .todos-header {
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .todos-header H1 {
    text-align: center;
    font-size: 2rem;
    color: rgb(52, 51, 51);
  }

  .todos-header p {
    text-align: center;
    color: gray;
  }

  .todos-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    bottom: 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.825rem;
  }
  .todos-footer p {
    color: gray;
    font-weight: 300;
  }
  .todos-footer p a {
    text-decoration: none;
    color: #0092cf;

    background: -webkit-linear-gradient(#ef48fe, #0092cf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
