function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function siftUp(heap, i) {
    if (i <= 0) return;

    let parent = Math.round(i / 2) - 1;
    while (parent >= 0 && heap[parent] > heap[i]) {
        swap(heap, parent, i);

        i = parent;
        parent = Math.round(i / 2) - 1;
    }
}

function siftDown(heap, i) {
    const maxI = heap.length - 1;

    let left = i * 2 + 1;
    let right = i * 2 + 2;

    while (left <= maxI) {
        let lowestI = right <= maxI && heap[right] < heap[left] ? right : left;
        swap(heap, lowestI, i);

        left = lowestI * 2 + 1;
        right = lowestI * 2 + 2;
    }
}

function extractMin(heap) {
    if (heap.length <= 1) return heap.pop();

    const min = heap[0];
    heap[0] = heap.pop();

    siftDown(heap, 0);

    return min;
}

function heapSort(arr) {
    const heap = [];

    for (let i = 0; i < arr.length; i++) {
        heap.push(arr[i]);
        siftUp(heap, i);

        // console.log({heap: heap.join(',')});
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = extractMin(heap);
        // const min = extractMin(heap);
        // console.log({min, heap: heap.join(',')});
    }
}

// let arr1 = [5, 60, 1, 40, 2, 90, 70, 9];
// console.log('before sorting: ', arr1);
// heapSort(arr1);
// console.log('after sorting: ', arr1);
//
// console.log('--------');

module.exports = heapSort;
