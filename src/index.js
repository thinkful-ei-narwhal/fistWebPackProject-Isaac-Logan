import $ from 'jquery';
import item from './scripts/item.js';
import store from './scripts/store.js';
import shoppingList from './scripts/shopping-list.js';

const main = function() {
	shoppingList.bindEventListeners();
	shoppingList.render();
};

$(main);
