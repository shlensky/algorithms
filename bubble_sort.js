function bubbleSort(arr) {
  let moved = true;
  let length = arr.length;

  while (moved) {
    moved = false;

    for (i = 0; i < arr.length; i++) {
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

const arr1 = [5, 1, 4, 2];
console.log('before sorting: ', arr1);
bubbleSort(arr1);
console.log('after sorting: ', arr1);

console.log('--------');

const arr2 = [32, 11, 0, 12, 399, 13, 158];
console.log('before sorting: ', arr2);
bubbleSort(arr2);
console.log('after sorting: ', arr2);
