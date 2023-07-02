const inputA = document.getElementById('integer-a');
const inputB = document.getElementById('integer-b');
const gcdOutput = document.getElementById('gcd-output');
const gcdBtn = document.getElementById('gcd-btn');


function gcd(a, b) {
    if (a === 0 && b === 0) {
        alert('gcd(a, b) is undefined whenever a = 0 and b = 0');
        return;
    }
    let r = a % b;
    while (r > 0) {
        a = b;
        b = r;
        r = a % b;
    }
    return b;
}

function lcm(a, b) {
    if (a === 0 && b === 0) {
        alert('lcm(a, b) is undefined whenever a = 0 and b = 0');
    }
    return (a * b) / gcd(a, b);
}

function gcdClickHandler() {
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    // Check to make sure we have valid integer values for both inputs
    if (!a || !b) {
        return;
    }
    let d = gcd(a, b);
    renderGcdOutput(d);
}

function renderGcdOutput(d) {
    gcdOutput.textContent = `${d}`;
    gcdOutput.classList.toggle('invisible');
}

gcdBtn.addEventListener('click', gcdClickHandler);

