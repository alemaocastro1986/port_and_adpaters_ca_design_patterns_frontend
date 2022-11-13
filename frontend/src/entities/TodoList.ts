import Item from "./Item";
import Observable from "./Observable";

export default class TodoList extends Observable {
  private _items: Item[];

  constructor(items?: any[]) {
    super();
    this._items = [];
    if (items) {
      for (const item of items) {
        this.items.push(new Item(item.description, item.done, item.id));
      }
    }
  }

  public get items(): any[] {
    return this._items;
  }

  addItem(description: string) {
    if (!description) return;
    if (this.items.some((i: any) => i.description === description)) return;
    if (this.items.filter((item: any) => !item.done).length > 5) return;
    const item = new Item(description);
    this.items.push(item);

    this.notify("ADD_ITEM", item);
  }

  removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notify("REMOVE_ITEM", item.id);
  }

  toggleDone(item: any) {
    const todoIndex = this.items.indexOf(item);
    this.items[todoIndex].done = !this.items[todoIndex].done;
    this.notify("TOGGLE_DONE_ITEM", this.items[todoIndex]);
  }

  getItem(description: string) {
    const item = this.items.find((item) => item.description === description);
    return item;
  }

  getCompleted() {
    const total = this.items.length;
    if (total === 0) return 0;
    const done = this.items.filter((item: any) => item.done).length;
    return Math.round((done / total) * 100);
  }
}
