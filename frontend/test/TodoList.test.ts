import TodoList from "../src/entities/TodoList";

describe("Entities(TodoList)", function () {
  it("should be able create a todo list, with completed equal 0", () => {
    const todoList = new TodoList();
    todoList.addItem("a");
    todoList.addItem("b");
    todoList.addItem("c");

    expect(todoList.getCompleted()).toBe(0);
  });

  it("should be able create a todo list with completed equal 25", () => {
    const todoList = new TodoList();
    todoList.addItem("a");
    todoList.addItem("b");
    todoList.addItem("c");
    todoList.addItem("d");

    const todo = todoList.getItem("a");

    if (todo) {
      todoList.toggleDone(todo);
    }

    expect(todoList.getCompleted()).toBe(25);
  });

  it("should be able create a todo list with 4 items and remove 1", () => {
    const todoList = new TodoList();
    todoList.addItem("a");
    todoList.addItem("b");
    todoList.addItem("c");
    todoList.addItem("d");

    const a = todoList.getItem("a");
    const c = todoList.getItem("c");

    if (a) todoList.toggleDone(a);
    if (c) todoList.removeItem(c.id);

    expect(todoList.getCompleted()).toBe(33);
    expect(todoList.items).toHaveLength(3);
  });
});
