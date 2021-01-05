function getMin(start, arr) {
  let min = Infinity;
  let minI = null;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minI = i;
    }
  }

  return {min, minI};
}

function selectionSort(arr) {
  let unsortedStart = 0;

  while (unsortedStart < arr.length) {
    let {min, minI} = getMin(unsortedStart, arr);

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