function mergeHalves(arr, leftStart, rightEnd, temp) {
    if (leftStart === rightEnd) return;

    const leftEnd = leftStart + Math.floor((rightEnd - leftStart) / 2);
    const rightStart = leftEnd + 1;    

    let left = leftStart;
    let right = rightStart;
    
    let x = 0;
    while (left <= leftEnd && right <= rightEnd) {
        if (arr[left] < arr[right]) {
            temp[x++] = arr[left++];
        } else {
            temp[x++] = arr[right++];
        }
    }

    while(left <= leftEnd) {
        temp[x++] = arr[left++];
    }

    while(right <= rightEnd) {
        temp[x++] = arr[right++];
    }

    for (let i = 0; i < x; i++) {
        arr[leftStart++] = temp[i];
    }
}

function doMergeSort(arr, leftStart, rightEnd, temp) {    
    if (leftStart >= rightEnd) {        
        return;
    }
    
    const middle = Math.floor((leftStart + rightEnd) / 2);
    
    doMergeSort(arr, leftStart, middle, temp);
    doMergeSort(arr, middle + 1, rightEnd, temp);
    
    mergeHalves(arr, leftStart, rightEnd, temp);
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return array;
	}

    doMergeSort(arr, 0, arr.length - 1, Array(arr.length));	
}


module.exports = mergeSort;

// let arr1 = [5, 1, 4, 2];
// console.log('before sorting: ', arr1);	
// mergeSort(arr1);	
// console.log('after sorting: ', arr1);	

// console.log('--------');	

// let arr2 = [32, 11, 0, 12, 399, 13, 158];	
// console.log('before sorting: ', arr2);	
// mergeSort(arr2);	
// console.log('after sorting: ', arr2);