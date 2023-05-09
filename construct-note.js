// add whatever parameters you deem necessary
const helper = (str) => {
    let frequencies = {};
    for(let char of str){
        frequencies[char] = (frequencies[char]+ 1 )|| 1
    }

    return frequencies


}


//firstStr is a message and secondStr are our given letters
function constructNote(firstStr,secondStr) {
    let firstFreq = helper(firstStr)
    let secondFreq = helper(secondStr)
    for (let char in firstFreq) {
        if (!secondFreq[char]) {
          return false;
        }
        if (firstFreq[char] > secondFreq[char]) {
          return false;
        }
      }

    return true

}


// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true