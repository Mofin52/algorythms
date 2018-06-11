function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    arr.map((el, ind) => {
        if (el < smallest) {
            smallest = el;
            smallest_index = ind;
        }
    });
    return smallest_index;
};

function findBiggestIndex(arr) {
    let biggest = arr[0];
    let biggest_index = 0;
    arr.map((el, ind) => {
        if (el > biggest) {
            biggest = el;
            biggest_index = ind;
        }
    });
    return biggest_index;
};

function selectionSortAsc(arr) {
    newArr = [];
    let smallest = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        smallest = findSmallestIndex(arr);
        newArr.push( arr.splice(smallest, 1).pop());
    }
    return newArr;
};

function selectionSortDesc(arr) {
    newArr = [];
    let biggest = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        biggest = findBiggestIndex(arr);
        newArr.push( arr.splice(biggest, 1).pop());
    }
    return newArr;
};

let testArr = [3, 5, 10, 2, 46, 1532, 44, 61];