/************************ TASK 1 Презентация */

let arr = ['a', 'b', 'c'];

for (let item of arr) {
    console.log(item);
}

/************************ TASK 2 Презентация */

let array = ['a', 'b', 'c'];

for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
    console.log(array[i]);
}

/************************ TASK 3 Презентация */

let newArr = [1, 2, 3];
newArr.push(4, 5);
newArr.splice(0, 2);
console.log(newArr);

/************************ TASK 4 Презентация */
let users = [
    { name: 'John', age: 18 },
    { name: 'Andrew', age: 12 },
    { name: 'Tom', age: 25 },
    { name: 'Alex', age: 22 },
    { name: 'Kate', age: 15 }
]

let adultUsers = users.filter(function (obj) {
    return obj.age >= 18
})

let underageUsers = users.filter(function (obj) {
    return obj.age < 18
})

console.log(adultUsers);
console.log(underageUsers);

/************************ TASK 5 Презентация */

let numbers = [5, true, 25, 'a', 100, {}];
let sum = 0;
for (let item of numbers) {
    if (typeof item == "number") {
        sum += item;
    }
}
console.log(sum);

/************************ TASK 1 ДЗ */

function mergeArr(arrKey, arrVal) {
    let obj = {};
    for (let i = 0; i < arrKey.length; i++) {
        obj[arrKey[i]] = arrVal[i];
    }
    return obj;
}

console.log(mergeArr(['name', 'age', 'phoneNum'], ['Vika', 23, 805165]));

/************************ TASK 2 ДЗ */

function splitArr(arr, num) {
    let newArr = [];
    for (let i = 0; i < Math.ceil(arr.length / num); i++) {
        newArr[i] = arr.slice((i * num), (i * num) + num);
    }
    return newArr;
}

console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/************************ TASK 4 ДЗ */

let arr1 = [1, 2, 3, 4, 5];
let cloneArr1 = arr1.slice(0);
console.log(cloneArr1);

/************************ TASK 5 ДЗ */

function oddNum(arr) {
    let oddArr = arr.filter(function (num) {
        return num % 2 != 0;
    });
    return oddArr;
}

console.log(oddNum([1, 2, 3, 4, 5, 6]));

function squareNum(arr) {
    return arr.map(function (num) {
        return num ** 2;
    });
}

console.log(squareNum([1, 2, 3]));

function includeStr(arr) {
    for (let item of arr) {
        if (typeof item == "string") {
            return true;
        }
    }
    return false;
}

console.log(includeStr([1, 5, 'str', true, {}]));

/************************ TASK 6 ДЗ */

function getAges(arr) {
    let ages = [];
    for (let obj of arr) {
        ages.push(obj.age);
    }
    return ages;
}

console.log(getAges([{ name: 'Sergey', age: 33 }, { name: 'Daria', age: 23 }, { name: 'Kirill', age: 40 }]))

/************************ TASK 7 ДЗ */

function getKey(arr, k) {
    let key = [];
    for (let obj of arr) {
        key.push(obj[k]);
    }
    return key;
}

console.log(getKey([{ name: 'Sergey', age: 33 }, { name: 'Daria', age: 23 }, { name: 'Kirill', age: 40 }], "name"));
console.log(getKey([{ name: 'Sergey', age: 30 }, { name: 'Daria', age: 20 }, { name: 'Kirill', age: 40 }], "age"));

/************************ TASK 8 ДЗ */

function calculate(array) {
    let newO = {};
    for (let obj of array) {
        for (let key in obj) {
            if (isNaN(newO[key])) {
                newO[key] = obj[key];
            } else newO[key] += obj[key];
        }
    }
    return newO;
}

console.log(calculate([
    { x: 1, z: 2, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    { a: 1, b: 2 },
]));

/************************ TASK 9 ДЗ */

function deleteDublicates(arr) {
    return arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })
}

console.log(deleteDublicates([1, 2, 3, 8, 5, 2, 6, 9, 4, 1, 5, 8, 9, 1, 3]));

/************************ TASK 10 ДЗ */

function numberOfItem(arr, item) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            j++;
        }
    };
    return j;
}

console.log(numberOfItem([1, 2, 5, 1, 4, 1, 2], 1));

/************************ TASK 11 ДЗ */

function reverseArr(arr) {
    let revArr = [];
    for (let i = 0; i < arr.length; i++) {
        revArr[i] = arr[arr.length - 1 - i];
    }
    return revArr;
}

let a = [1, 2, 3];
console.log(reverseArr(a));
console.log(a);

/************************ TASK 12 ДЗ */

let arr2 = [1, 5, 2, 3, 4, 5, 8, 7, 9, 5, 2, 1, 4, 5, 6, 7, 8, 2, 11, 10];

let sum2 = arr2.reduce(function (a, b) {
    return a + b;
})

console.log(sum2);

/************************ TASK 14 ДЗ */

let users14 = [
    { name: 'John', sex: 'man' },
    { name: 'Andrew', sex: 'man' },
    { name: 'Tom', sex: 'women' },
    { name: 'Alex', sex: 'man' },
    { name: 'Kate', sex: 'women' }
]

let result = users14.reduce(function (total, amount) {
    if (amount.sex == 'man') {
        total.man.push(amount)
    } else total.women.push(amount)
    return total
}, { man: [], women: [] })

console.log(result)

/************************ TASK 15 ДЗ */

function findInd(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            return i;
        }
    }
    return -1;
}

console.log(findInd([1, 2, 3, 4, 5], 5));
console.log(findInd([1, 2, 3, 4, 5], 10));

/************************ TASK 16 ДЗ */

function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j - 1] > arr[j]) {
                let f = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = f;
            }
        }
    }
    return arr;
}

console.log(sortArr([2, 7, 1, 5, 3, 8, 4, 5, 9, 10, 6]));

/************************ TASK 17 ДЗ */

function equalArr(arr1, arr2) {
    let array1 = deleteDublicates(arr1);
    let array2 = deleteDublicates(arr2);
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) == -1) {
            return false;
        }
    }
    return true;
}

console.log(equalArr([1, 2, 3], [1, 1, 2, 4]));
console.log(equalArr([1, true, 4, 2, 3], [1, 3, 1, 2, 4]));
console.log(equalArr([1, 2, 3], [1, 3, 2]));

/************************ TASK 19 ДЗ */

function clearArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Boolean(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(clearArr([1, false, 0, true, '', undefined, 'dfkj', 5, 9, null]))