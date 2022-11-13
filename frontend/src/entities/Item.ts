export default class Item {
  readonly id: string;
  readonly description: string;
  readonly done: boolean;
  constructor(description: string, done?: boolean, id?: string) {
    this.id = id ?? Math.random().toString(36).slice(2, 7);
    this.description = description;
    this.done = done ?? false;
  }
}
