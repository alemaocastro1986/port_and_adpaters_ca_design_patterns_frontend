import { mount } from "@vue/test-utils";

import TodoListViewVue from "../src/components/TodoListView.vue";
import TodoMemoryGateway from "../src/gateways/TodoMemoryGateway";

function sleep(millisecons: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, millisecons);
  });
}

test("it should be able a Todo list page ", async function () {
  const todoGateway = new TodoMemoryGateway();

  const wrapper = mount(TodoListViewVue, {
    global: {
      provide: {
        todoGateway,
      },
    },
  });
  await sleep(100);
  expect(wrapper.get(".completed").text()).toBe("33%");
});
