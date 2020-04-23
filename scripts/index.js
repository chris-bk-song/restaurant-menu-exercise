// Small exercise
function getCategories(menu) {
  return Object.keys(menu);
}


function nameToListItem(categoryName) {
  const listItem = document.createElement('li');
  listItem.textContent = categoryName;
  return listItem;
}
// console.log(nameToListItem('potatoes'));


// map is very powerful. line 17 can replace all lines 20-23
function categoriesToListItems(arrayOfStrings) {
  return arrayOfStrings.map(nameToListItem);
}
// function categoriesToListItems(arrayOfStrings) {
//   const arrayOfListItems = [];
//   arrayOfStrings.forEach(function (string) {
//     const listItem = nameToListItem(string);
//     arrayOfListItems.push(listItem);
//   });
//   return arrayOfListItems;
// }


function appendToMenu(listItem) {
  const ul = document.querySelector('.js-menu');
  ul.appendChild(listItem);
}


// const someStrings = ['pancakes', 'waffles', 'icecream'];
// console.log(categoriesToListItems(someStrings));


const categories = getCategories(menu);
// console.log(categories);


const categoryListItems = categoriesToListItems(categories);
// console.log(categoryListItems);


categoryListItems.forEach(appendToMenu);