import TodoList from "../entities/TodoList";
import type HttpClient from "../infra/HttpClient";
import type TodoGateway from "./TodoGateway";

class TodoHttpGateway implements TodoGateway {
  constructor(readonly httpClient: HttpClient, readonly base_url: string) {}
  async getTodos(): Promise<any> {
    const todosData = await this.httpClient.get(`${this.base_url}/todos`);
    const todoList = new TodoList(todosData);
    return todoList;
  }
  async addItem(item: any): Promise<any> {
    await this.httpClient.post(`${this.base_url}/todos`, item);
  }
  async updateItem(item: any): Promise<any> {
    await this.httpClient.put(`${this.base_url}/todos/${item.id}`, item);
  }
  async removeItem(id: string): Promise<any> {
    await this.httpClient.delete(`${this.base_url}/todos/${id}`);
  }
}

export default TodoHttpGateway;
