console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
  console.log('addItem', item);
  basket.push(item);
  let contains = basket.includes(item); //W3 Schools I came across .includes and I wanted to give it a try.
  if(contains){
    console.log('item has been added');
    return true;
  }
}

function listItems(){
  console.log('listItems');
  let count = 0;
  while(count<basket.length){
    console.log(basket[count]);
    count ++;
  }
}

function empty(){
  basket=[];
}
//   //console.log('empty');
//   //for(let fruit of basket){
//     //console.log(fruit);
//       basket.pop();
//   }
//     console.log('item has been removed');
//     return true;


addItem('Apples');
addItem('Grapes');
addItem('Oranges');
listItems();
empty();
console.log(basket);
