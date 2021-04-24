console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ['item',];

function addItem(item){
  console.log('addItem', item);
  if(item >= basket.length){
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
