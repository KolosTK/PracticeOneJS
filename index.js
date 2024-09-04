function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | null {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function isOdd(num: number): boolean {
    return num % 2 !== 0;
}

function max(a: number, b: number): number {
    if (a > b) {
        return a;
    }
    return b;
}

function min(a: number, b: number): number {
    if (a < b) {
        return a;
    }
    return b;
}

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    var result: number = 1;
    for (var i: number = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function greet(name: string): string {
    return "Hello, " + name + "!";
}

function repeatString(str: string, times: number): string {
    var result: string = "";
    for (var i: number = 0; i < times; i++) {
        result += str;
    }
    return result;
}

function toUpperCase(str: string): string {
    return str.toUpperCase();
}

function toLowerCase(str: string): string {
    return str.toLowerCase();
}

function reverseString(str: string): string {
    var result: string = "";
    for (var i: number = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function isPalindrome(str: string): boolean {
    var reversed: string = reverseString(str);
    return str === reversed;
}

function findMaxInArray(arr: number[]): number {
    var max: number = arr[0];
    for (var i: number = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMinInArray(arr: number[]): number {
    var min: number = arr[0];
    for (var i: number = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr: number[]): number {
    var sum: number = 0;
    for (var i: number = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function averageArray(arr: number[]): number {
    var sum: number = sumArray(arr);
    return sum / arr.length;
}

function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (var i: number = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimesUpTo(n: number): number {
    var count: number = 0;
    for (var i: number = 2; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function fibonacci(n: number): number[] {
    var sequence: number[] = [0, 1];
    for (var i: number = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function convertToBoolean(value: any): boolean {
    return Boolean(value);
}

function negateBoolean(bool: boolean): boolean {
    return !bool;
}

function andBoolean(bool1: boolean, bool2: boolean): boolean {
    return bool1 && bool2;
}

function orBoolean(bool1: boolean, bool2: boolean): boolean {
    return bool1 || bool2;
}

function xorBoolean(bool1: boolean, bool2: boolean): boolean {
    return (bool1 && !bool2) || (!bool1 && bool2);
}

function stringContains(str: string, substring: string): boolean {
    return str.indexOf(substring) !== -1;
}

function stringStartsWith(str: string, prefix: string): boolean {
    return str.indexOf(prefix) === 0;
}

function stringEndsWith(str: string, suffix: string): boolean {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function replaceString(str: string, search: string, replacement: string): string {
    return str.split(search).join(replacement);
}

function countOccurrences(str: string, substring: string): number {
    var count: number = 0;
    var pos: number = str.indexOf(substring);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(substring, pos + 1);
    }
    return count;
}

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPositive(num: number): boolean {
    return num > 0;
}

function isNegative(num: number): boolean {
    return num < 0;
}

function absoluteValue(num: number): number {
    if (num < 0) {
        return -num;
    }
    return num;
}

function roundNumber(num: number): number {
    return Math.round(num);
}

function floorNumber(num: number): number {
    return Math.floor(num);
}

function ceilNumber(num: number): number {
    return Math.ceil(num);
}

function convertToString(value: any): string {
    return String(value);
}

function convertToNumber(value: any): number {
    return Number(value);
}

function convertToInteger(value: any): number {
    return parseInt(value, 10);
}

function convertToFloat(value: any): number {
    return parseFloat(value);
}

function isInteger(value: any): boolean {
    return Number.isInteger(value);
}

function isFloat(value: any): boolean {
    return value === +value && value !== (value | 0);
}

function trimString(str: string): string {
    return str.trim();
}

function padString(str: string, length: number, padChar: string): string {
    var result: string = str;
    while (result.length < length) {
        result = padChar + result;
    }
    return result;
}

function getSubstring(str: string, start: number, end: number): string {
    return str.slice(start, end);
}

function arrayContains(arr: any[], value: any): boolean {
    return arr.indexOf(value) !== -1;
}

function arrayRemove(arr: any[], value: any): any[] {
    var index: number = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
