export default class DescriptionBox extends HTMLElement {
  constructor() {
    super();

    this.author;

    // <h4 class="card-title fw-bolder"></h4>

    this.innerHTML = `
      <p class="card-text mb-0" data-text="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error ad impedit vel porro dolores architecto aut similique dicta mollitia expedita molestiae, quis pariatur libero sit voluptatibus temporibus cumque cupiditate.
      </p>
      <div class="d-none" data-box="hint-btns">
        <button type="button" class="btn my-auto ps-0 pe-0" data-btn="more">
          Show more...
        </button>
        <button type="button" class="btn my-auto ps-0 pe-0" data-btn="less">
          Show less...
        </button>
      </div>
    `;

    this.description = this.querySelector('[data-text="description"]');

    // console.log('DESCRIPTION => ', this.description);

    this.observeParagraph();

    // this.setAuthor.bind(this);
  }

  // setAuthor(author) {
  //   const t = `<h4 class='card-title fw-bolder'>${author}</h4>`;
  //   const title = this.querySelector('.card-title');
  //   title.innerText = author;

  //   // this.prependChild(title);
  //   title.classList.add('mt-7');
  //   console.log('SET AUTHOR => ', author, title, this);

  //   this.author = author;
  // }

  observeParagraph() {
    const btnBox = this.querySelector('[data-box="hint-btns"]');
    const moreBtn = btnBox.querySelector('[data-btn="more"]');
    const lessBtn = btnBox.querySelector('[data-btn="less"]');

    const observer = new ResizeObserver((entries) => {
      console.log('OBSERVER => ', entries);
      const { target } = entries[0];

      const lineHeight = parseInt(
        window.getComputedStyle(target).getPropertyValue('line-height')
      );
      const height = target.clientHeight;
      const numLines = Math.round(height / lineHeight);

      if (numLines > 2) {
        btnBox.classList.remove('d-none');
        target.classList.add('hide-text');
        lessBtn.classList.add('d-none');

        lessBtn.addEventListener('click', (e) => {
          target.classList.add('hide-text');
          moreBtn.classList.remove('d-none');
          lessBtn.classList.add('d-none');
        });
        moreBtn.addEventListener('click', (e) => {
          target.classList.remove('hide-text');
          moreBtn.classList.add('d-none');
          lessBtn.classList.remove('d-none');
        });

        observer.unobserve(target);
      }

      console.log(
        'Number of lines in the paragraph: ' + numLines,
        numLines,
        lineHeight,
        height
      );
    });

    observer.observe(this.description);
  }
}

window.customElements.define('description-box', DescriptionBox);
