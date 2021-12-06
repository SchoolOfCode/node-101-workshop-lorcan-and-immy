import myCollection from "./collection.js";


  //console.log(myCollection);


  //task 2


//2c. Create a function called describeItem, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should console.log a message according to how many of the item you have.

//If there's only one of the item in your collection, it should log "I have a name. Here's what I like about it: whatILike". If you have more than one of it, the message should log "I have count names. Here's what I like about them: whatILike".

//For example, the result of calling the describeItem function with the first item in our collection would be: "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"

//Call your function below where you've defined it, handing in the first item in myCollection.

//Now run the file again (using node index.js);

function describeItem(item){
  console.log()
  if (item.count === 1){
    console.log("I have a " + item.name + ". Here's what I like about it: " + item.whatILike)
  } else {
    console.log("I have " + item.count+" " + item.name + "s. Here's what I like about it: " + item.whatILike)
  }
}

//let item = 0;

//describeItem(myCollection[1]);


// 2 part d.

function describeCollection(array) {
    array.forEach(describeItem);
}

describeCollection(myCollection);

