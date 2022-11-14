<script lang="ts">
  import { setContext } from "svelte";
  import TodoListView from "./components/TodoListView.svelte";
  import TodoHttpGateway from "./gateways/TodoHttpGateway";
  import AxiosAdapter from "./infra/AxiosAdapter";
  const httpClient = new AxiosAdapter();
  const todoGateway = new TodoHttpGateway(httpClient, "http://localhost:3005");
  setContext("todoGateway", todoGateway);
</script>

<TodoListView />

<style>
</style>
