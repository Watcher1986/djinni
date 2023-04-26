import AbstractView from '../AbstractView/index.js';
import ContentCard from '../../components/contentCard';

import { getPhotos } from '../../api/photos';

const parse = (str) => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(str, 'text/html');

  const nodes = doc.body.childNodes;
  // `nodes` is now a collection of DOM nodes that you can iterate through
  // for (let i = 0; i < nodes.length; i++) {
  //   console.log(nodes[i]);
  // }
  return nodes;
};

export default class PhotosView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Photos');

    this.dataList;
    // this.getClientParams();
  }

  async getViewPhotos() {
    const photos = await getPhotos();
    return photos;
  }

  getClientParams(photos) {
    const nodes = parse(photos);
    // console.log(photos, nodes);
    // if (!this.dataList) return;
    // const p = nodes.querySelectorAll('[data-text="description"]');

    const paragraphNodes = Array.from(nodes).filter(async (node) => {
      let p;
      try {
        p = await node.querySelector('card-text');
        // if (p) return p;
        // node.nodeName === 'P';
      } catch (error) {
        console.log(error);
      }
      // console.log(typeof node);
      // const p = node.querySelector('[data-text="description"]');
      // if (p) return p;
      // node.nodeName === 'P';
      return p;
    });

    console.log('PARAGRAPHS => ', paragraphNodes);

    // const lineHeight = parseInt(
    //   window.getComputedStyle(p).getPropertyValue('line-height')
    // );
    // const height = this.p.clientHeight;
    // const numLines = Math.round(height / lineHeight);

    // console.log('Number of lines in the paragraph: ' + numLines, p);

    // document.addEventListener('load', () => {
    //   this.p = document.querySelector('[data-text="description"]');
    //   console.log(this.p);
    // });
  }

  async render() {
    const photos = await this.getViewPhotos();

    const photosList = photos
      .map((photo) => {
        const card = new ContentCard(photo);
        return card.getHtml();
      })
      .join('');

    this.getClientParams(photosList);

    this.dataList = photosList;

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
