import dimsumPorkDumplings from './dimsum-pork-dumplings.jpg';
import gyozaFriedDumplings from './gyoza-fried-dumplings.jpg';
import pierogis from './pierogis.jpg';
import ravioli from './ravioli.jpg';
import apricotDumplings from './apricot-dumplings.jpg';

export default function menuComponent() {
    const contentElement = document.getElementById('content');
    const menuItems = [
        {"name": "Dim Sum Port Dumplings", "image": dimsumPorkDumplings},
        {"name": "Gyoza Fried Dumplings", "image": gyozaFriedDumplings},
        {"name": "Pierogis", "image": pierogis},
        {"name": "Ravioli", "image": ravioli},
        {"name": "Apricot Dessert Dumplings", "image": apricotDumplings}
    ]

    for (let item of menuItems) {
        console.log(item.name, item.image);

        let itemDiv = document.createElement('div');

        let itemHeader = document.createElement('h2');
        itemHeader.textContent = item.name;

        let itemImage = new Image();
        itemImage.src = item.image;

        itemDiv.append(itemHeader, itemImage);
        contentElement.append(itemDiv);
    }

    return contentElement;
}