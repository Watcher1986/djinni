import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { PhotosPage } from '../views/PhotosPage';

export const AppLayout = async () => `
    <header>${Header()}</header>
    <main class="pt-5">${await PhotosPage()}</main>
    <footer class="p-3">${Footer()}</footer>
`;
