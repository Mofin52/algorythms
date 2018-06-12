function quickSort (arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivotPoint = arr[0];
        let less = arr.filter((el) => {
            return el < pivotPoint;
        });
        let greater = arr.filter((el) => {
            return el > pivotPoint;
        })
        return quickSort(less).concat(pivotPoint, quickSort(greater));
    }
}


let testArr1 = [3, 2, 1, 5, 4];
console.log("QUICK SORT ALGORYTHM");
console.log(quickSort(testArr1));