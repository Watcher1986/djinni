import AbstractView from '../views/AbstractView';
import './descriptionBox';

export default class ContentCard extends AbstractView {
  constructor(media) {
    super(media);
    this.media = media;
  }

  render() {
    return `
      <div class="card w-100 rounded-3 px-0" data-box="card">
        <img class="card-img-top border-top-3" src="${this.media.download_url}" alt="" />

        <div class="card-body">
          <h4 class="card-title fw-bolder">${this.media.author}</h4>
          <description-box></description-box>
        </div>

        <div class="card-body border-top">
          <button type="button" class="btn rounded-3 fw-bolder me-2 my-1" data-btn="save">Save to collection</button>
          <button type="button" class="btn rounded-3 fw-bolder my-1" data-btn="share">Share</button>
        </div>
      </div>
    `;
  }
}
