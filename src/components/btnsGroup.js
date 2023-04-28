export default class BtnsGroup extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="btn-group align-items-center" role="group" data-btn="group">
        <input type="radio" class="btn-check" name="newest" id="newest" autocomplete="off">
        <label class="btn btn-outline-secondary fw-bolder" for="newest" data-btn="label">Newest</label>

        <input type="radio" class="btn-check" name="latest" id="latest" autocomplete="off">
        <label class="btn btn-outline-secondary fw-bolder" for="latest" data-btn="label">Latest</label>
      </div>
    `;

    this.group = document.querySelector('[data-btn="group"]');
    this.newest = document.querySelector('#newest');
    this.active = null;

    this.handleBtnGroup();
  }

  handleBtnGroup() {
    this.newest.checked = true;
    this.active = this.newest;

    this.group.addEventListener('click', (e) => {
      if (e.target.matches('[data-btn="label"]')) {
        this.active.checked = false;
        this.active = e.target.previousElementSibling;

        e.target.previousElementSibling.checked = true;
      }
    });
  }
}

window.customElements.define('btns-group', BtnsGroup);
