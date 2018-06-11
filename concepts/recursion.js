function recursiveArraySum (arr) {
    if (arr.length == 1) {
        return arr[0]
    } else {
        return arr[0] + recursiveArraySum(arr.splice(1));
    }
}

function recursiveArrayLengthCount (arr) {
    if (arr.length == 1) {
        return 1
    } else {
        return 1 + recursiveArrayLengthCount(arr.splice(1))
    }
}

function recursiveArrayMaxElem (arr) {
    if (arr.length == 1) {
        return arr[0]
    } else {
        let newMax = recursiveArrayMaxElem(arr.splice(1))
        return arr[0] > newMax ? arr[0] : newMax;
    }
}

let testArr = [1, 2, 3, 4, 5]; //sum - 15, length - 5, max - 5
console.log(recursiveArrayMaxElem(testArr));