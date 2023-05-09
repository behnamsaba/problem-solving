// add whatever parameters you deem necessary
function averagePair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target * 2) break;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target*2) {
                return true
            }
        }
    }

    return false
}

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false


