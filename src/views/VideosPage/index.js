import AbstractView from '../AbstractView/index.js';

export default class VideosView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Videos');
  }

  async render() {
    const template = `
      <section class="d-flex justify-content-center align-items-center my-7 h-100">
        <h1>Videos page</h1>
      </section>
    `;

    return template;
  }
}
