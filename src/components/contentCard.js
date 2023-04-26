import AbstractView from '../views/AbstractView';

export default class ContentCard extends AbstractView {
  constructor(media) {
    super(media);
    this.media = media;

    this.view;

    // document.addEventListener('DOMContentLoaded', function () {
    //   // The DOM has finished loading
    //   // Your code to retrieve data from server and add it to the DOM

    //   // Create a MutationObserver instance
    //   const observer = new MutationObserver(function (mutationsList, observer) {
    //     for (let mutation of mutationsList) {
    //       if (mutation.type === 'childList') {
    //         // A child node has been added or removed from the DOM
    //         if (
    //           mutation.addedNodes.length &&
    //           mutation.addedNodes[0].classList.contains('card-text')
    //         ) {
    //           // The specific element we're interested in has been added to the DOM
    //           // Do something here
    //           console.log('Element loaded to the DOM!');
    //           observer.disconnect(); // Disconnect the observer once we've found the element
    //           break;
    //         }
    //       }
    //     }
    //   });

    //   // Observe changes to the DOM
    //   observer.observe(document.body, { childList: true, subtree: true });
    // });

    // this.p = document.querySelector('[data-text="description"]');

    // document.addEventListener('load', () => {
    //   // Get the paragraph element and check that it exists
    //   this.p = document.querySelector('[data-text="description"]');
    //   if (this.p) {
    //     const lineHeight = parseInt(
    //       window.getComputedStyle(this.p).getPropertyValue('line-height')
    //     );
    //     const height = this.p.clientHeight;
    //     const numLines = Math.round(height / lineHeight);

    //     console.log('Number of lines in the paragraph: ' + numLines, this.p);
    //   }
    // });

    // this.p = document.querySelector('[data-text="description"]');
    // console.log(this.p);
    // const lineHeight = parseInt(
    //   window.getComputedStyle(p).getPropertyValue('line-height')
    // );
    // const height = p.clientHeight;
    // const numLines = Math.round(height / lineHeight);

    // console.log('Number of lines in the paragraph: ' + numLines, p);
    // this.getClientParams();
  }

  getClientParams(view) {
    console.log(view);
    if (!view) return;
    const p = view.querySelector('[data-text="description"]');

    const lineHeight = parseInt(
      window.getComputedStyle(this.p).getPropertyValue('line-height')
    );
    const height = this.p.clientHeight;
    const numLines = Math.round(height / lineHeight);

    console.log('Number of lines in the paragraph: ' + numLines, this.p);

    // document.addEventListener('load', () => {
    //   this.p = document.querySelector('[data-text="description"]');
    //   console.log(this.p);
    // });
  }

  render() {
    return `
      <div class="card w-100 rounded-3 px-0" data-box="card">
        <img class="card-img-top border-top-3" src="${this.media.download_url}" alt="" />

        <div class="card-body">
          <h4 class="card-title fw-bolder">${this.media.author}</h4>
          <p class="card-text" data-text="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error ad impedit vel porro dolores architecto aut similique dicta mollitia expedita molestiae, quis pariatur libero sit voluptatibus temporibus cumque cupiditate.</p>
        </div>

        <div class="card-body border-top">
          <button type="button" class="btn rounded-3 fw-bolder me-2 my-1" data-btn="save">Save to collection</button>
          <button type="button" class="btn rounded-3 fw-bolder my-1" data-btn="share">Share</button>
        </div>
      </div>
    `;
  }

  getHtml() {
    if (!this.media) return;

    // console.log(this.render());

    this.view = this.render();
    return this.render();
    // this.getClientParams();
    // return this.element;
  }
}

// const template = `
//   <div class="card w-100 rounded-3 px-0" data-box="card">
//     <img class="card-img-top border-top-3" src="${media.download_url}" alt="" />

//     <div class="card-body">
//       <h4 class="card-title fw-bolder">${media.author}</h4>
//       <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error ad impedit vel porro dolores architecto aut similique dicta mollitia expedita molestiae, quis pariatur libero sit voluptatibus temporibus cumque cupiditate.</p>
//     </div>

//     <div class="card-body border-top">
//       <button type="button" class="btn rounded-3 fw-bolder me-2 my-1" data-btn="save">Save to collection</button>
//       <button type="button" class="btn rounded-3 fw-bolder my-1" data-btn="share">Share</button>
//     </div>
//   </div>
// `;
