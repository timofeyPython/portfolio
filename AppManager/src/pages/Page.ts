export class Page {
  params: string;
  constructor(params: string) {
    this.params = params;
  }

  getRoot() {
    throw new Error("Method gerRoot should be implemented");
  }

  afterRender() {}

  destoy() {}
}
