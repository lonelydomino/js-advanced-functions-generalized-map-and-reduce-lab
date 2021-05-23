// Add your functions here


function map(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
      }
    return array
}
function reduce(array, callback, start) {
    let total
    let i
    if (start) {
      total = start
      i = 0
    } else {
      total = array[0]
      i = 1
    }
    for (i; i < array.length; i++) {
      total = callback(array[i], total);
    }
    return total;
}