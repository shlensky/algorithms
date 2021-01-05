function bubbleSort(arr) {
  let moved = true;
  let length = arr.length;

  while (moved) {
    moved = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;

        moved = true;
      }
    }

    length = length - 1;
  }
}

module.exports = bubbleSort;