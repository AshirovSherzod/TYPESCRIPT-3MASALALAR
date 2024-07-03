function obfuscate(email) {
    var res = '';
    for (var _i = 0, email_1 = email; _i < email_1.length; _i++) {
        var i = email_1[_i];
        if (i === "@") {
            res += " [at] ";
        }
        else if (i === ".") {
            res += ' [dot] ';
        }
        else {
            res += i;
        }
    }
    return res;
}
// console.log(obfuscate("salom.email@.com"));
// console.log(obfuscate("sherzodemail@.com"));
// console.log(obfuscate("Abdullokh.email@.com"));
function generateShape(num) {
    var res = '';
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            res += "+";
        }
        res += '\n';
    }
    return res.trim();
}
// console.log(generateShape(5));
// console.log(generateShape(8));
// console.log(generateShape(10));
function sortMyString(str) {
    var even = str.split("").filter(function (value, index) { return index % 2 === 0; }).join("");
    var odd = str.split("").filter(function (value, index) { return index % 2 !== 0; }).join("");
    return "".concat(even, " ").concat(odd);
}
// console.log(sortMyString("CodeWars"));
// console.log(sortMyString("YCOLUE'VREER"));
function getSum(a, b) {
    var sum = 0;
    if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i;
        }
    }
    else {
        for (var i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
}
// console.log(getSum(0,-1));
// console.log(getSum(0,1));
// console.log(getSum(2,2));
// console.log(getSum(1,5));
function reverseWords(str) {
    var result = str.split("").reverse().join("").split(" ").reverse().join(" ");
    return result;
}
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// console.log(reverseWords("apple"));
function sumTwoSmallestNumbers(numbers) {
    var num = numbers.sort(function (a, b) { return a - b; });
    return num[0] + num[1];
}
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
function monkeyCount(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(monkeyCount(5));
// console.log(monkeyCount(9));
function findShort(s) {
    var arr = s.split(" ").sort(function (a, b) { return a.length - b.length; });
    return arr[0].length;
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
function disemvowel(str) {
    var result = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        if (i !== "A" && i !== "a" && i !== "E" && i !== "e" && i !== "I" && i !== "i" && i !== "O" && i !== "o" && i !== "U" && i !== "u") {
            result += i;
        }
    }
    return result;
}
// console.log(disemvowel("This website is for losers LOL!"));
function strCount(str, letter) {
    var count = 0;
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var i = str_2[_i];
        if (i === letter) {
            count++;
        }
    }
    return count;
}
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'l'));
