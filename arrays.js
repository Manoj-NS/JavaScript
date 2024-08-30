/*
let numbers= [1,2,3,4,5];
console.log(numbers);

let fruits=['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
console.log(fruits);

let cars= new Array('Mahindra', 'TATA', 'Maruti', 'Toyota');
console.log(cars);

console.log(cars[2]);

cars[3]='Honda';
console.log(cars[3]);
console.log(cars);

cars.push='BMW';
console.log(cars);

console.log(fruits[2]);
//To replace
fruits[2]='Cherry'; 
console.log(fruits[2]);
console.log(fruits);

// To add
fruits.push('Pineapple'); 
console.log(fruits);

// To get the length

console.log('Total cars are: '+cars.length);
console.log('Total fruits are: '+fruits.length);

//Geting the data in for loop

let x;
for(x in cars){
    console.log(cars[x]); // to get data using index
}

for(x of cars){
    console.log(x); // to get direct data
}
*/

/*******************Array Methods************************** */

let fruits =['Apple', 'Banana', 'Grapes'];
console.log(fruits);

//To remove an element
fruits.pop(); //It will remove the Last Element.
console.log(fruits);

fruits.shift(); // It will remove the First Element.
console.log(fruits);

//To add an element

fruits.push('Cherry'); // It will add the element in Last.
console.log(fruits);

fruits.unshift('Mango'); // It will add the element in First
console.log(fruits);

//To Delete/Remove the element
delete fruits[1];
console.log(fruits); // It will Delete the element, but the position is empty.

fruits[1]='Orange';
console.log(fruits);

//Splice Function: 
fruits.splice(1,2); //It will remove the element from 1 to 2
console.log('Splice Function: '+fruits);

fruits.splice(2,0,'Banana','Apple') //It means Adding 2 Elements and 0=No Element should remove
console.log('Splice Function: '+fruits);

//Slice Function:
let citrusFruuits = fruits.slice(0,2); 
//It will copy/take an element from "fruits" array and added to new array 'citrusFruits'
//slice(0,2) means "fruits<2", it will copy 0 and 1 elements. 
console.log('Slice Function: '+citrusFruuits);
console.log(fruits);

//Concat Method: 
//It it used to combine 2 or more array and print the common result.
let bikes=['Pulsar','Splinder', 'YZR', 'ThunderBird'];
let cars=['Swift', 'TataSafari','Bolaro','tataSumo'];
let cycles=['Atlas', 'Hero', 'BSA', 'Rangers'];

let transport=bikes.concat(cars,cycles);
console.log(transport);