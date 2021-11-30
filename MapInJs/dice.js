const dice = {};
const dieRoll = 10;

//setting counter  
let one = 1;
let two = 1;
let three = 1;
let four = 1;
let five = 1;
let six = 1;

// giving key name as  numbers
let key = 0;

//assigning key and values to the dice object
while ((one < dieRoll) && (two < dieRoll) && (three < dieRoll) && (four < dieRoll) && (five < dieRoll) && (six < dieRoll)) {
    let value = Math.floor((Math.random() * 6) + 1);
    dice[key] = value;

    switch (value) {
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
        case 6:
            six++;
            break;
    }
    key++;
}
console.log(" occured 1  " + one + " times \n", "occured 2  " + two + " times \n", "occured 3   " + three + " times \n", "occured 4  " + four + " times \n", "occured 5  " + five + " times \n", "occured 6  " + six + "times \n");

//check for maximum
if (one == dieRoll) {
    console.log("1 has maximum count.");
} else if (two == dieRoll) {
    console.log("2 has maximum count.");
} else if (three == dieRoll) {
    console.log("3 has maximum count.");
} else if (four == dieRoll) {
    console.log("4 has maximum count.");
} else if (five == dieRoll) {
    console.log("5 has maximum count.");
} else if (six == dieRoll) {
    console.log("6 has maximum count.");
}

//check for minimum
if ((one < two) && (one < three) && (one < four) && (one < five) && (one < six)) {
    console.log("1 has minimum count.");
} else if ((two < one) && (two < three) && (two < four) && (two < five) && (two < six)) {
    console.log("2 has minimum count.");
} else if ((three < one) && (three < two) && (three < four) && (three < five) && (three < six)) {
    console.log("3 has minimum count.");
} else if ((four < one) && (four < two) && (four < three) && (four < five) && (four < six)) {
    console.log("4 has minimum count.");
} else if ((five < one) && (five < two) && (five < three) && (five < four) && (five < six)) {
    console.log("5 has minimum count.");
} else if ((six < one) && (six < three) && (six < four) && (six < five) && (six < two)) {
    console.log("6 has minimum count.");
}