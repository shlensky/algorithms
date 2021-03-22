/* Реализация поиска подстроки с помощью алгоритма КМП (Кнута-Морриса-Пратта) */
function buildP(pattern) {
    let j = 0;
    let i = 1;
    let p = [0];

    while (i < pattern.length) {
        if (pattern[j] === pattern[i]) {
            p[i] = j + 1;
            j++; i++;
        } else {
            if (j === 0) {
                p[i] = 0;
                i++;
            } else {
                j = p[j - 1];
            }
        }
    }

    return p;
}

function KMP_indexOf(haystack, needle) {
    if (needle.length > haystack.length) return -1;

    const p = buildP(needle);
    let i = 0;
    let j = 0;

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) {
                return i - (needle.length - 1);
            }

            j++; i++;

        } else {
            if (j === 0) {
                i++;
            } else {
                j = p[j - 1];
            }
        }
    }

    return -1;
}

const testPairs = [
    ['', 'foo'],
    ['foo', 'foo'],
    ['oofoofofooo', 'foo'],
    ['ooofofofoo', 'foo'],
    ['ababcd', 'abc'],
    ['лилилось лилилась', 'лилила']
];

for (let pair of testPairs) {
    const [haystack, needle] = pair;
    const actual = KMP_indexOf(haystack, needle);
    const expected = haystack.indexOf(needle);
    if (actual !== expected) {
        console.error(`Got wrong result "${actual}", wanted "${expected}": ${haystack}, ${needle}`)
    }
}

// KMP_indexOf('abababc', 'ababc');

console.log('done!');
