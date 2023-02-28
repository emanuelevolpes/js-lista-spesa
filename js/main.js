'use strict';

//LIST-WHILE
const shoppingListWhile = [
    'Pane',
    'Pasta',
    'Pollo',
    'Latte',
    'Riso',
    'Pesce'
];

let containerList = document.getElementById('shopping-list-while');
let counter = 0;

while (counter < shoppingListWhile.length) {
    console.log(shoppingListWhile[counter]);
    const listItem = document.createElement('li');
    listItem.append(shoppingListWhile[counter]);
    containerList.append(listItem);
    counter++;
}


//LIST-FOR
const shoppingListFor = [
    'Pane',
    'Pasta',
    'Pollo',
    'Latte',
    'Riso',
    'Pesce'
];

let containerListFor = document.getElementById('shopping-list-for');

for (let i = 0; i < shoppingListFor.length; i++) {
    const listItemFor = document.createElement('li');
    listItemFor.append(shoppingListFor[i]);
    containerListFor.append(listItemFor);
}

//LIST-DO-WHILE
const shoppingListDoWhile = [
    'Pane',
    'Pasta',
    'Pollo',
    'Latte',
    'Riso',
    'Pesce'
];

let containerListDoWhile = document.getElementById('shopping-list-do-while');
let doWhileCounter = 0;

do {
    const listItemDoWhile = document.createElement('li');
    listItemDoWhile.append(shoppingListDoWhile[doWhileCounter]);
    containerListDoWhile.append(listItemDoWhile);
    doWhileCounter++;
} while (doWhileCounter < shoppingListDoWhile.length);