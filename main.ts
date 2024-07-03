function obfuscate(email: string): string {
    let res: string = ''
    for (let i of email) {
        if (i === "@") {
            res += " [at] "
        }
        else if (i === ".") {
            res += ' [dot] '
        }
        else {
            res += i
        }
    }
    return res
}

// console.log(obfuscate("salom.email@.com"));
// console.log(obfuscate("sherzodemail@.com"));
// console.log(obfuscate("Abdullokh.email@.com"));


function generateShape(num: number): string {
    let res: string = ''
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            res += "+"
        }
        res += '\n'
    }

    return res.trim()
}

// console.log(generateShape(5));
// console.log(generateShape(8));
// console.log(generateShape(10));

function sortMyString(str: string): string {
    let even: string = str.split("").filter((value, index) => index % 2 === 0).join("")
    let odd: string = str.split("").filter((value, index) => index % 2 !== 0).join("")
    return `${even} ${odd}`
}

// console.log(sortMyString("CodeWars"));
// console.log(sortMyString("YCOLUE'VREER"));

function getSum(a: number, b: number): number {
    let sum: number = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
        }
    }
    else {
        for (let i = b; i <= a; i++) {
            sum += i
        }
    }
    return sum
}

// console.log(getSum(0,-1));
// console.log(getSum(0,1));
// console.log(getSum(2,2));
// console.log(getSum(1,5));

function reverseWords(str: string): string {
    let result: string = str.split("").reverse().join("").split(" ").reverse().join(" ")
    return result
}

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// console.log(reverseWords("apple"));

function sumTwoSmallestNumbers(numbers: number[]): number {
    let num: number[] = numbers.sort((a, b) => a - b)
    return num[0] + num[1]
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

function monkeyCount(n: number): number[] {
    let arr: number[] = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

// console.log(monkeyCount(5));
// console.log(monkeyCount(9));

function findShort(s: string): number {
    let arr: string[] = s.split(" ").sort((a, b) => a.length - b.length)
    return arr[0].length
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));

function disemvowel(str: string): string {
    let result: string = ""
    for (let i of str) {
        if (i !== "A" && i !== "a" && i !== "E" && i !== "e" && i !== "I" && i !== "i" && i !== "O" && i !== "o" && i !== "U" && i !== "u") {
            result += i
        }
    }
    return result
}

// console.log(disemvowel("This website is for losers LOL!"));

function strCount(str: string, letter: string): number {
    let count: number = 0
    for (let i of str) {
        if (i === letter) {
            count++
        }
    }
    return count
}

console.log(strCount('Hello', 'l'));
console.log(strCount('', 'l'));

