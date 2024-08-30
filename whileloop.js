let counter=11;

while (counter <=10){ //This loop won't run, because it failed the condition
    console.log('counter: '+counter)
    counter=counter+1;
}

counter=11;  // because in above loop it stops after "11"
do { // This loop run once, because it run the loop then check the condition
    console.log('counter value is: ' +counter);
    counter++;
}while (counter<=10){

}