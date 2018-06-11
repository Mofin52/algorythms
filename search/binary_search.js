function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        console.log(mid);
        let guess = list[mid];
        if (guess == item) {
            return `Index of item is ${mid}`;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return "Item not found";
}

let testList = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

console.log(binary_search(testList, 16)); //4
console.log(binary_search(testList, 160)); //Item not found