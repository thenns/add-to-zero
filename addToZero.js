// Starting array
//let array = [28, 43, -12, 30, 4, 0, 12]
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
for (let i = 0; i < array.length; i++) {
    let comparator = 0;
    //console.log('it gets here');
    if (array[comparator] + array[i] === 0) {
       console.log("true");
    } else {
        console.log("false");
        comparator++;
    }
}
