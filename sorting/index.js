const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion_sort');

// Генерируем тестовые данные
const samples = require('./data.json');
// const samples = [];
// for (let i = 0; i < 1000; i ++) {
// 	const sample = [];
// 	for (let j = 0; j < 10000; j++) {
// 		sample.push(Math.round(Math.random()*1000000));
// 	}
// 	samples.push([sample, sample.sort((a, b) => a - b)]);
// }
// console.log(JSON.stringify(samples));
// process.exit(0);
console.log('Samples generated!');

function compareArrays(array1, array2) {
	if (array1.length !== array2.length) return false;
	return array1.every((value, index) => value === array2[index]);
}

function assertArraysEqual(array1, array2, message) {
	if (!compareArrays(array1, array2)) {
		console.log(array1);
		console.log(array2);
		throw new Error(message);
	}
}

const algorithms = [bubbleSort, selectionSort, insertionSort];
for (const algorithm of algorithms) {
	console.time(algorithm.name);
	for (const sample of samples) {
		const copy = sample[0].slice(0);
		const expected = sample[1];
		
		bubbleSort(copy);
		assertArraysEqual(copy, expected, 'Arrays is not equal! Algorithm: ' + bubbleSort.name);
	}
	console.timeEnd(algorithm.name);
}

console.log('Done!');