// Starting array
//let array = [28, 43, -12, 30, 4, 0, 12]
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addsToZero () {
    for (let i = 0; i < array.length; i++) {
        let comparator = 0;
        if (array[comparator] + array[i] === 0) {
            return true;
        } else if (array[comparator] + array[i] != 0){
            comparator++;
        } else {
            return false;
        }
    }
};

if (addsToZero()) {
    console.log('true');
} else {
    console.log('false');
}
//I wrote a function that iterates through the length of the array.
//the comparator variable will be the the first number of the array. It will then take the sum of 
//itself and the first number of the array to determine if they equal zero. If they do, it returns true.
//if not, it will become the second number in the array and repeat the process.
//if none of the numbers add to zero, the function will return false
