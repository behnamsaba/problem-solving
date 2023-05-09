// add whatever parameters you deem necessary
function twoArrayObject(firstArr, secondArr) {
    let targetObj = {};
    for (let i = 0; i < firstArr.length; i++) {
        targetObj[firstArr[i]] = secondArr[i] || null;
    }

    return targetObj;
}

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]); // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]); // {'x': 1, 'y': 2, 'z': null}

// function twoArrayObject(keys, values) {
//     return keys.reduce((obj, cur, idx) => {
//         obj[cur] = idx < values.length ? values[idx] : null;
//         return obj;
//     }, {});
// }

