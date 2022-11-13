import { mount } from "@vue/test-utils";

import TodoListComponent from "../src/components/TodoListComponent.vue";
import TodoList from "../src/entities/TodoList";

function sleep(millisecons: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, millisecons);
  });
}

test("it should be able a Todo list page ", async function () {
  const todoList = new TodoList();

  todoList.addItem("A");
  todoList.addItem("B");
  todoList.addItem("C");

  const item = todoList.getItem("C");
  todoList.toggleDone(item);

  const wrapper = mount(TodoListComponent, {
    props: {
      todoList: todoList,
    },
  });
  await sleep(100);
  expect(wrapper.get(".completed").text()).toBe("33%");
});
