let num = 149;
function reverseDigits(num) {
    return num.toString().split("").reverse().join("");
}
console.log(reverseDigits(num));