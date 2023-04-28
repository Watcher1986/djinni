export default class {
  constructor(config) {
    this.config = config;
  }

  setTitle(title) {
    document.title = title;
  }

  async render() {
    return '';
  }
}
