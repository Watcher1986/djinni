import AbstractView from '../AbstractView/index.js';

export default class VideosView extends AbstractView {
  constructor(config) {
    super(config);
    this.setTitle('Videos');
  }

  init() {
    this.pageViewContainer.innerHTML = `
      <section class="d-flex justify-content-center align-items-center h-100">
        <h1>Videos page</h1>
      </section>
    `;
  }

  async render() {
    this.init();
  }
}
