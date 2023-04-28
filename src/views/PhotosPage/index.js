import AbstractView from '../AbstractView/index.js';
import ContentCard from '../../components/card.js';
import '../../components/btnsGroup.js';

import { getPhotos } from '../../api/photos';

import { parseAndAppend } from '../../utils/parseAndAppend.js';
import {
  getMediaFromLocalStorage,
  addMediaToLocalStorage,
} from '../../utils/localStorage.js';

export default class PhotosView extends AbstractView {
  constructor(config) {
    super(config);
    this.setTitle('Photos');

    this.isLoading = false;
    this.page = 0;
    this.itemsCount = 0;

    this.pageViewContainer = this.config.container;
  }

  async observeLazyLoading(itemsContainerView, itemsCountBox) {
    let observerAnchor =
      this.pageViewContainer.querySelector('#observe-anchor');

    const cb = async (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !this.isLoading) {
        const itemsHtml = await this.getViewData(false);

        itemsCountBox.innerHTML = this.itemsCount;
        parseAndAppend(itemsHtml, itemsContainerView);
      }
    };

    const observer = new IntersectionObserver(cb);
    observer.observe(observerAnchor);
  }

  init(itemsHtml) {
    this.pageViewContainer.innerHTML = `
      <article class="d-flex justify-content-between align-items-center">
        <div>
          <h1>All photos</h1>
          <span class="fw-bolder" data-tip="count">
            ${this.itemsCount ?? null} items
          </span>
        </div>
        <btns-group></btns-group>
      </article>
      <section class="d-grid gap-3 mt-4" data-box="list">
        ${itemsHtml ?? null}
      </section>
      <span class="mt-4" id="observe-anchor" />
    `;
  }

  async getViewData(firstRender = false) {
    this.isLoading = true;
    let photos;
    const { data, page } = getMediaFromLocalStorage('photos');

    if (data.length && firstRender) {
      photos = data;
    } else {
      photos = await getPhotos(page);
      addMediaToLocalStorage('photos', photos);
    }

    const itemsHtml = await photos
      .map((photo) => {
        const card = new ContentCard(photo);
        return card.render();
      })
      .join('');

    this.itemsCount += photos.length;

    this.isLoading = false;
    return itemsHtml;
  }

  async render() {
    const itemsHtml = await this.getViewData(true);

    this.init(itemsHtml);

    const itemsContainerView =
      this.pageViewContainer.querySelector('[data-box="list"]');
    const itemsCountBox =
      this.pageViewContainer.querySelector('[data-tip="count"]');

    await this.observeLazyLoading(itemsContainerView, itemsCountBox);
  }
}
