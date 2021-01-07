const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion_sort');
const mergeSort = require('./merge_sort');
const quickSort = require('./quick_sort');
const heapSort = require('./heap_sort');
const defaultSort = function(arr) {
	arr.sort((a, b) => a - b);
}

// Генерируем тестовые данные
// const samples = require('./data.json');
const samples = [];
for (let i = 0; i < 10; i ++) {
	const sample = [];
	const size = 3000 * i;
	for (let j = 0; j < size; j++) {
		sample.push(Math.round(Math.random()*1000000000));
		// sample.push(size - j);
		// sample.push(j);
	}
	samples.push([sample.slice(0), sample.sort((a, b) => a - b)]);
}
//console.log(samples);
// console.log(JSON.stringify(samples));
// process.exit(0);
console.log('Samples generated!');

function compareArrays(array1, array2) {
	if (array1.length !== array2.length) return false;
	return array1.every((value, index) => {
		if (value === array2[index]) return true;
		else {
			console.log({ value, value2: array2[index], index})
			return false;
		}
	});
}

function assertArraysEqual(array1, array2, source, message) {
	if (!compareArrays(array1, array2)) {
		console.log(array1);
		console.log(array2);
		console.log(source);
		throw new Error(message);
	}
}

// for (let i = 0; i < 2; i++) {
	const algorithms = [defaultSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort/*, too slow: bubbleSort*/];
	for (const algorithm of algorithms) {
		console.time(algorithm.name);
		for (const sample of samples) {
			const copy = sample[0].slice(0);
			const expected = sample[1];

			algorithm(copy);
			assertArraysEqual(copy, expected, sample[0], 'Arrays is not equal! Algorithm: ' + algorithm.name);
		}
		console.timeEnd(algorithm.name);
	}
	console.log('---------');
// }

console.log('Done!');
