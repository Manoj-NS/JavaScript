//for loop

    let i;

    for(i=1; i<=5; i++){
        console.log('Value of i: '+ i);
    }

    let fruits =['Apple', 'Banana', 'Grapes']
// for in loop
    
    let x;  // it is an Index Value
    for (x in fruits){
     //   console.log(x)
        console.log((x)+'. '+fruits[x]);
    }

 // for of loop
    for (x of fruits){
        console.log(x);
    }