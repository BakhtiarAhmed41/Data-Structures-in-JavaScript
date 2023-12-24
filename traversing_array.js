//Given an array arr, print all its elements

function traverseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);   //Printing each element of array one by one
    }
}

function main() {
    let arr = [3, 5, 45, 32, 90];

    traverseArray(arr); //Calling the function with an array passed in argument
}