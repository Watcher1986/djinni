import AbstractView from '../AbstractView/index.js';

export default class PodcastsView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Podcasts');
  }

  async render() {
    const template = `
      <section class="d-flex justify-content-center align-items-center h-100">
        <h1>Podcasts page</h1>
      </section>
    `;

    return template;
  }
}
