const inputA = document.getElementById("integer-a");
const inputB = document.getElementById("integer-b");


function gcd(a, b) {
    let r = a % b;
    while (r > 0) {
        a = b;
        b = r;
        r = a % b;
    }
    return b;
}


