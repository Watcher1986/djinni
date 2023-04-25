import { Footer } from '../components/footer';
import '../components/header';
import '../components/sidenav';

export const AppLayout = async (children) => {
  //   const header = new Header();

  //   const headerHTML = header.render();

  //   headerHTML.console.log('APP LAYOUT => ', headerHTML);

  return `
    <app-header role="header"></app-header>
    <main class="pt-5">
      <section class="d-flex w-100 justify-content-between">
        <side-navbar id="sidenav" class="w-25"></side-navbar>
        <section class="d-flex flex-column" data-box="content">${await children()}</section>
      </section>
    </main>
    <footer class="p-3">${Footer()}</footer>
`;
};
