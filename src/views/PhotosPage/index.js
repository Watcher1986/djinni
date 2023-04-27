import AbstractView from '../AbstractView/index.js';
import ContentCard from '../../components/card.js';

import { getPhotos } from '../../api/photos';

export default class PhotosView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Photos');
  }

  async getViewPhotos() {
    const photos = await getPhotos();
    return photos;
  }

  async render() {
    const photos = await this.getViewPhotos();

    const photosList = photos
      .map((photo) => {
        const card = new ContentCard(photo);
        return card.getHtml();
      })
      .join('');

    const template = `
      <article class="d-flex justify-content-between align-items-center">
        <div>
          <h1>All photos</h1>
          <span class="fw-bolder" data-tip="count"></span>
        </div>
        <div class="btn-group align-items-center" role="group" data-btn="group">
          <input type="radio" class="btn-check" name="newest" id="newest" autocomplete="off" checked>
          <label class="btn btn-outline-secondary fw-bolder" for="newest" data-btn="label">Newest</label>
      
          <input type="radio" class="btn-check" name="latest" id="latest" autocomplete="off">
          <label class="btn btn-outline-secondary fw-bolder" for="latest" data-btn="label">Latest</label>
        </div>
      </article>
      <section class="d-grid gap-3 mt-4" data-box="list">${
        photosList ?? null
      }</section>
    `;

    return template;
  }
}
