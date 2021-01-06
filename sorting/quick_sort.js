function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, leftStart, rightEnd, depth = 0) {
    const pivot = arr[rightEnd];

    let i = leftStart, j = rightEnd;
    while (i < j) {
        if (arr[i] <= pivot) {
            i++;
        } else {
            while (j > i) {
                if (arr[j] <= pivot) {
                    swap(arr, i, j);
                    break;
                }
                j--;
            }
        }
    }

    if (i !== rightEnd) {
        partition(arr, leftStart, i - 1, depth + 1);
        partition(arr, i, rightEnd, depth + 1);
    }
}

function quickSort(arr) {
    partition(arr, 0, arr.length - 1);
}

// let arr1 = [5, 60, 1, 40, 2, 90, 70, 9];
// console.log('before sorting: ', arr1);
// quickSort(arr1);
// console.log('after sorting: ', arr1);
//
// console.log('--------');

module.exports = quickSort;
