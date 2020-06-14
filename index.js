// Add your functions here
function map(arr, func) {
    // return func(arr)
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(func(arr[i]));
    }
    return newarr
}

function reduce(arr, func, start) {
    // return func(arr)
    let value = (start) ? start : arr[0]
    let i = (start) ? 0 : 1
    for (; i < arr.length; i++) {
        value = func(arr[i], value);
    }
    return value
}