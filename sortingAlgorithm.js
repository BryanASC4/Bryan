function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

function bubbleSort(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = arr.length - i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; )
    }
}

var list = [
    {
        name: "item 1",
        price: 34
    },
    {
        name: "item 2",
        price: 56
    }, 
    {
        name: "item 3",
        price: 10
    }
];

var price = list.map(function(x) {
    return x["price"];
});

console.log(bubbleSort(price));