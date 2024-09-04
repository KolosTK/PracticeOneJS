function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function greet(name) {
    return "Hello, " + name + "!";
}

function repeatString(str, times) {
    var result = "";
    for (var i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function reverseString(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function isPalindrome(str) {
    var reversed = reverseString(str);
    return str === reversed;
}

function findMaxInArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMinInArray(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function averageArray(arr) {
    var sum = sumArray(arr);
    return sum / arr.length;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimesUpTo(n) {
    var count = 0;
    for (var i = 2; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function fibonacci(n) {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function convertToBoolean(value) {
    return Boolean(value);
}

function negateBoolean(bool) {
    return !bool;
}

function andBoolean(bool1, bool2) {
    return bool1 && bool2;
}

function orBoolean(bool1, bool2) {
    return bool1 || bool2;
}

function xorBoolean(bool1, bool2) {
    return (bool1 && !bool2) || (!bool1 && bool2);
}

function stringContains(str, substring) {
    return str.indexOf(substring) !== -1;
}

function stringStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

function stringEndsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function replaceString(str, search, replacement) {
    return str.split(search).join(replacement);
}

function countOccurrences(str, substring) {
    var count = 0;
    var pos = str.indexOf(substring);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(substring, pos + 1);
    }
    return count;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPositive(num) {
    return num > 0;
}

function isNegative(num) {
    return num < 0;
}

function absoluteValue(num) {
    if (num < 0) {
        return -num;
    }
    return num;
}

function roundNumber(num) {
    return Math.round(num);
}

function floorNumber(num) {
    return Math.floor(num);
}

function ceilNumber(num) {
    return Math.ceil(num);
}

function convertToString(value) {
    return String(value);
}

function convertToNumber(value) {
    return Number(value);
}

function convertToInteger(value) {
    return parseInt(value, 10);
}

function convertToFloat(value) {
    return parseFloat(value);
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isFloat(value) {
    return value === +value && value !== (value | 0);
}

function trimString(str) {
    return str.trim();
}

function padString(str, length, padChar) {
    var result = str;
    while (result.length < length) {
        result = padChar + result;
    }
    return result;
}

function getSubstring(str, start, end) {
    return str.slice(start, end);
}

function arrayContains(arr, value) {
    return arr.indexOf(value) !== -1;
}

function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
