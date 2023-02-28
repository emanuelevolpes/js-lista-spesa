'use strict';

const shoppingList = [
    'Pane',
    'Pasta',
    'Pollo',
    'Latte',
    'Riso',
    'Pesce'
];

let containerList = document.getElementById('shopping-list');
let counter = 0;

while (counter < shoppingList.length) {
    console.log(shoppingList[counter]);
    const listItem = document.createElement('li');
    listItem.append(shoppingList[counter]);
    containerList.append(listItem);
    counter++;
}