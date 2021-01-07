function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quicksortHoare(array, left, right) {
    const pivotIndex = partitionHoare(array, left, right);

    if (left < pivotIndex - 1) {
        quicksortHoare(array, left, pivotIndex - 1);
    }

    if (right > pivotIndex) {
        quicksortHoare(array, pivotIndex, right)
    }

    return array;

}

function partitionHoare(array, left, right) {
    const pivot = array[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (array[left] < pivot) left++;
        while (array[right] > pivot) right--;

        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(arr) {
    quicksortHoare(arr, 0, arr.length - 1);
}

// let arr1 = [ 8, 9, 4, 7, 4, 9, 9, 4, 9, 7, 6, 7, 7, 3, 5, 9, 7, 5, 9 ];
// // let arr1 = [4,3,4,5,4,5];
// // let arr1 = [4,1,1,4];
// console.log('before sorting: ', arr1);
// //quickSort(arr1);
// quickSort(arr1);
// console.log('after sorting: ', arr1);
//
// console.log('--------');

module.exports = quickSort;
