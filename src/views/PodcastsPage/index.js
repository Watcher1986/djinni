import AbstractView from '../AbstractView/index.js';

export default class PodcastsView extends AbstractView {
  constructor(config) {
    super(config);
    this.setTitle('Podcasts');
  }

  init() {
    this.pageViewContainer.innerHTML = `
      <section class="d-flex justify-content-center align-items-center h-100">
        <h1>Podcasts page</h1>
      </section>
    `;
  }

  async render() {
    this.init();
  }
}
