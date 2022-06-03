import makingDumplings from './making-dumplings.jpg';

export default function homePageComponent() {
    const contentElement = document.getElementById('content');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'International House of Dumplings';

    const pageSubTitle = document.createElement('h2');
    pageSubTitle.textContent = 'Dumplings from around the world';

    const description1 = document.createElement('p');
    description1.textContent = 'Gyoza, pierogies, ravioli &mdash; every food culture has some version of deliciousness wrapped in dough.';
    
    const description2 = document.createElement('p');
    description2.textContent = 'Here at the International House of Dumplings, we bring them all to you.';

    const homepageDumplings = new Image();
    homepageDumplings.src = makingDumplings;


    contentElement.append(pageTitle, pageSubTitle, description1, description2, homepageDumplings);

    return contentElement;
}
