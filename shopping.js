var shoppingList = [
 'beans', 
 'cyanide', 
 'fruit shoot'
 ];

shoppingList.pop();
shoppingList.push('a camel');
shoppingList.unshift('depression');
shoppingList.shift();

function printList (list) {
 var listHTML = '<ol>';
 for (var i = 0; i < list.length; i += 1) {
  listHTML += '<li>' + list[i] + '</li>';
 }
 listHTML += '</ol>';
 print(listHTML);
}

printList(shoppingList);