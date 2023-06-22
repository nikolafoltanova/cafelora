function createDrinkComponent(drinkData) {
    const drinkContainer = document.createElement('div');
    drinkContainer.className = 'drink-container'; const nameElement = document.createElement('h2');
    nameElement.textContent = drinkData.name;
    drinkContainer.appendChild(nameElement); const orderedElement = document.createElement('p');
    orderedElement.textContent = 'Ordered: ' + (drinkData.ordered ? 'Yes' : 'No');
    drinkContainer.appendChild(orderedElement); const imageElement = document.createElement('img');
    imageElement.src = drinkData.image;
    imageElement.alt = drinkData.name;
    drinkContainer.appendChild(imageElement); const orderButton = document.createElement('button');
    orderButton.textContent = 'Objednat';
    drinkContainer.appendChild(orderButton); return drinkContainer;
} const drinkData = {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    image: 'https://cafelora.kodim.app/assets/cups/romano.png',
}; const drinkElement = createDrinkComponent(drinkData);
const appElement = document.getElementById('app');
appElement.appendChild(drinkElement);
