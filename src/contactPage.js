export default function contactComponent() {
    const contentElement = document.getElementById('content');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact';

    const phoneInfo = document.createElement('div');
    phoneInfo.textContent = 'Phone: 123-456-7890';

    const emailInfo = document.createElement('div');
    emailInfo.textContent = 'Email: info@internationhouseofdumplings.com';   

    contentElement.append(contactHeader, phoneInfo, emailInfo);

    return contentElement;
}