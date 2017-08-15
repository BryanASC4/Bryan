var list = ["converse", "van", "levi", "air jordan", "nike", "yeezys", "addidas", "rebox", "bew balance", "polo", "pucci", "crocs", "payless", "sperry", "dc"];

console.log(list.sort());
console.log(binarySearch("air jordan", list));

// perform a binarysearch to find the position in the array
function binarySearch(target, arr) {
    arr[Math.round(arr.length / 2)]
}



// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp; 
// }

// function bubbleSort(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         for (var j = arr.length - i; j >= 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 swap(arr, j, j - 1);
//             }
//         }
//     }
//     return arr;
// }

// function wordOrder(word1, word2) {
//     var shortest;
//     if (word1.length >= word2.length) {
//         shortest = word2.length;
//     } else shortest = word1.length;

//     for (var i = 0; i < shortest; i++) {
//         if (word1.substring(i, i + 1) != word2.substring(i, i + 1)) {
//             if ()
//         }
//     }  
// }


// charCodeAt() char to uni  
// fromCharCode() uni to char 