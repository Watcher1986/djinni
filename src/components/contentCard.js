export const ContentCard = (media) => `
  <div class="card w-100 rounded-3 px-0" data-box="card">
    <img class="card-img-top border-top-3" src="${media.download_url}" alt="" />
    <div class="card-body">
      <h4 class="card-title fw-bolder">${media.author}</h4>
      <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error ad impedit vel porro dolores architecto aut similique dicta mollitia expedita molestiae, quis pariatur libero sit voluptatibus temporibus cumque cupiditate.</p>
    </div>
    <div class="card-body border-top">
      <button type="button" class="btn rounded-3 fw-bolder me-2" data-btn="save">Save to collection</button>
      <button type="button" class="btn rounded-3 fw-bolder" data-btn="share">Share</button>
    </div>
  </div>
`;
