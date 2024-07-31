function generateDimes(limit) {
    var dimes = [];
    if (limit < 2) {
        return dimes;
    }

    dimes.push(2);
    for (var num = 3; num <= limit; num += 2) {
        var isDime = true;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isDime = false;
                break;
            }
        }
        if (isDime) {
            dimes.push(num);
        }
    }
    return dimes;
}

var dimesUpTo100 = generateDimes(100);
console.log(dimesUpTo100);
