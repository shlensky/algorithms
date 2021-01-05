function insert(arr, sortedStart, x) {
  for (let i = sortedStart; i <= arr.length; i++) {
    // end of array
    if (i === arr.length) {
      arr[i - 1] = x;
      break;
    }

    if (arr[i] < x) {
      arr[i - 1] = arr[i];
    } else {
      arr[i - 1] = x;
      break;
    }
  }
}

function insertionSort(arr) {
  let sortedStart = arr.length - 1;  
  while (sortedStart > 0) {
    let x = arr[sortedStart - 1];

    insert(arr, sortedStart, x);

    sortedStart--;
  }
}

module.exports = insertionSort;