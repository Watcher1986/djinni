import AbstractView from './AbstractView/index.js';

export default class ErrorPage extends AbstractView {
  constructor(config) {
    super(config);
    this.setTitle('');
  }

  async render() {
    return `
      <main class="d-flex justify-content-center align-items-center" id="not-found">
        <section>
          <h1 class="text-center">
            Something went wrong, please go back to the
            <a href="/photos" id="err-redirect">main page</a>
          </h1>
        </section>
      </main>
    `;
  }
}
