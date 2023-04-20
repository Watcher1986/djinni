import '../../components/sidenav';
import { ContentCard } from '../../components/contentCard';
import { getPhotos } from '../../api/photos';

export const PhotosPage = async () => {
  document.title = 'Photos';

  const photos = await getPhotos();
  const photosList = photos.map((photo) => ContentCard(photo)).join('');

  return `
  <section class="d-flex w-100 justify-content-between">
    <side-navbar id="sidenav" class="w-25"></side-navbar>
    <section class="d-flex flex-column" data-box="content">
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
    </section>
  </section>
`;
};

// const iconsClasses = {
//   allResourses: 'active-nav-icon',
//   selfie: 'active-selfie-icon',
//   recent: 'active-recent-icon',
//   deleted: 'active-nav-icon',
// };

// const sidenavHandler = () => {
//   const linksList = document.querySelectorAll('[data-link=sidenav]');
//   const tabsList = document.querySelectorAll('[data-tab=sidenav]');

//   // if (!linksList.length && !tabsList.length) return;

//   console.log(tabsList, linksList);

//   tabsList[0].classList.add('active-nav-icon');

//   linksList.forEach((link) =>
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       tabsList.forEach((tab) => {
//         if (
//           tab.classList.contains('active-recent-icon') ||
//           tab.classList.contains('active-nav-icon') ||
//           tab.classList.contains('active-selfie-icon')
//         ) {
//           tab.classList.remove(
//             'active-recent-icon',
//             'active-nav-icon',
//             'active-selfie-icon'
//           );
//         }
//       });

//       link.parentElement.classList.add(iconsClasses[e.currentTarget.name]);
//     })
//   );
// };

// window.addEventListener('click', (e) => {

// })

// window.addEventListener('DOMContentLoaded', sidenavHandler);

// window.addEventListener('DOMContentLoaded', async () => {
//   const photosContainer = document.querySelector('[data-box="list"]');
//   const itemsCountElement = document.querySelector('[data-tip="count"]');

//   const photos = await getPhotos();

//   if (photos) {
//     console.log('TYPE OF => ', typeof photos, photos);
//     const photosList = photos.map((photo) => ContentCard(photo)).join('');

//     photosContainer.innerHTML = await photosList;
//     itemsCountElement.innerHTML = await photos.length;
//   }
// });
