export class Joke {
  single: string;
  setup: string;
  delivery: string;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}
