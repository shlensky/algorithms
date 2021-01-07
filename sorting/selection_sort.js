function selectionSort(arr) {
  let unsortedStart = 0;

  while (unsortedStart < arr.length) {
    let min = arr[unsortedStart];
    let minI = unsortedStart;
    for (let i = unsortedStart + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minI = i;
      }
    }

    if (minI === unsortedStart) {
      unsortedStart++;
      continue;
    }

    arr[minI] = arr[unsortedStart];
    arr[unsortedStart] = min;

    unsortedStart++;
  }
}

module.exports = selectionSort;
