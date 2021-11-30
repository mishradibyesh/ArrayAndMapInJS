const numArray = [1, 2, -3, -11, 5, 6];

for (i = 0; i < numArray.length - 2; i++) {
    for (j = i + 1; j < numArray.length - 1; j++) {
        for (k = i + 2; k < numArray.length; k++) {
            if (numArray[i] + numArray[j] + numArray[k] == 0) {
                console.log(numArray[i], numArray[j], numArray[k]);
            }
        }
    }
}