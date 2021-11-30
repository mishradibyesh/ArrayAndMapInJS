const arrayOfNum = [];

//store element in array
for (let i = 0; i < 10; i++) {
    arrayOfNum[i] = Math.floor(Math.random() * 899) + 100;
}

console.log("Array is: [" + arrayOfNum + "]");

//defining variable
let maxVal = arrayOfNum[0];
let minVal = arrayOfNum[0];
let secondMax = 0;
let secondMin = 0;

for (i = 0; i < arrayOfNum.length; i++) {

    //checking for second maximum value
    if (arrayOfNum[i] > maxVal) {
        secondMax = maxVal;
        maxVal = arrayOfNum[i];
    } else if (arrayOfNum[i] > secondMax && arrayOfNum[i] != maxVal) {
        secondMax = arrayOfNum[i];
    }

    //checking for second minimum value
    if (arrayOfNum[i] < minVal) {
        secondMin = minVal;
        minVal = arrayOfNum[i];
    } else if (arrayOfNum[i] < secondMin && arrayOfNum[i] != minVal) {
        secondMin = arrayOfNum[i];
    }
}

console.log("Second Maximum value is: " + secondMax);
console.log("Second Minimum value is: " + secondMin);