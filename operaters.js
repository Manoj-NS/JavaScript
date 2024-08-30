/************Arithmetic Operators************* */
/*
let a=5;
let b=2;

let result=a+b;
let result1=a/b;
let result2=a%b;
let result3=a**b;

console.log('a+b= '+result)
console.log('a/b= '+result1)
console.log('a%b(It is a reminder value)= '+result2)
console.log('a**b(It is a^b means 5*2)= '+result3)

*/

// ++a and a++
/*
let c=10;
let c1=++c;
let c2=c++;
let d=2 * c++;
let e=2* ++c;

console.log('Value of ++c: '+c1)
console.log('Value of c++: '+c2)
console.log('Value of 2*c++: '+d)
console.log('Value of 2*++c: '+ e)

let f=6;
let g = 2 * --f;
console.log('Value of g: '+g)

*/

/************Assignment Operators************* */

// let x=10;
// x +=5;  // x=x+5
// console.log('Value for x: '+x);

/************Comparison Operators************* */

/*
== Equal to(Only check the value)
=== Equal Value and Equal Type (Check both value and type)
!= Not equal to (Check only value)
!== Not equal value and type (Check both value and type)
> Greater than
< Less than
*/

// let x=10;
// let y='10';

// console.log(x==y)
// console.log(x===y)

// console.log(x!=y)
// console.log(x!==y)

// console.log(x>y)
// console.log(x<y)
// console.log(x>=y)
// console.log(x>=y)

/*
Ternary Opertor: It is like If Then Else

*/

// let x1=10;
// let y1=20

// let result4=x1>y1 ? x1:y1
// console.log(result4)

/**********Logical Operator********** */

// && AND (True if both conditions are true)
// || OR (True if any of the condition is true)
// ! NOT (It will return True, when condition is false and vice versa)

// let x2=30;
// let y2=40;

// console.log('Result for &&: '+ (x2>y2 && x2<y2))
// console.log ('Result: for ||: '+(x2>y2 || x2<y2))
// console.log('Result for !: '+!(x2>y2))
// console.log('Result for !: '+!(y2>x2))

                /**********Type Operator********** */

// typeof: Return the types of Variable. It is used to find the Data Type of JavaScript Varible.
// instanceof:  Return True, if the Object is instance of an Object Type. It return a Boolean Value that indicates, 
// if an object is an instance of particular class.   

// let firstName='Manoj';

// console.log(typeof firstName);
// console.log(typeof 12345);
// console.log(typeof true);

// let lastName= new String('NS');
// console.log(lastName instanceof String);

// let DOB = new Number(123456);
// console.log(DOB instanceof Number);

              /**********Bitwise Operators********** */

console.log('********Bitwise Operators*********')

// &-> AND: sets each bit to 1, if both bits are 1
// |-> OR: sets each bit to 1, if one of two bits is 1
// ^-> XOR: sets each bit to 1, if only one of two bits is 1
// ~-> NOT: It will say as "NOT OF" and Invert all bits
// << Left Shift: Shift left and fills empty place to 0.
// >> Right Shift: Shift the bits to right and fill the empty space with 0.

let A=1; // Decimal value of "1" is "1". [Covert Decimal to Binary]
let B=2; //Decimal value of "2" is "10"  [Covert Decimal to Binary]
//Since it is 4 digit, we need to write as 
//1=0001
//2=0010
//  0000 it means output is A&B="0"  [Covert Binary to Decimal]
console.log(A&B);

// 1=0001 [Covert Decimal to Binary]
// 2=0010 [Covert Decimal to Binary]
//   0011, it means output A|B=3. [Covert Binary to Decimal]
console.log(A|B);

// 4=0100
// 6=0110
//   0110, it means output A|B=6. [Covert Binary to Decimal]
console.log(4|6);

// 3=0011 [Covert Decimal to Binary]
// 5=0101 [Covert Decimal to Binary]
//   0110, it means output 3^5=6. [Covert Binary to Decimal]
console.log(3^5);

// 5 = 00000101
// ~5= 11111010 [Convert to decimal=250]
console.log(~5);

// 5 << 1=It means Left Shift by 1
//  0101=Binary value of 5
// 1010=moved all bits by "1" 101_ and empty place filled with "0" 1010.
// 1010=Convert binary to decimal=10
console.log(5 << 1);


// 8>>2= It means shift the bits by 2 and fill the empty space by 0.
// Binary Value of 8 = 1000
// Shift bits by 2   = _ _10 and fill the empty space by 0 =0010
// Decimal value for 0010=2
console.log(8>>2);