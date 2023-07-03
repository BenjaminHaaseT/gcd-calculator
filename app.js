const inputA = document.getElementById('integer-a');
const inputB = document.getElementById('integer-b');
const gcdBtn = document.getElementById('gcd-btn');
const gcdOutput = document.getElementById('gcd-output');
const lcmBtn = document.getElementById('lcm-btn');
const lcmOutput = document.getElementById('lcm-output');

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
        console.log("error, invalid input");
        return;
    }
    let d = gcd(a, b);
    renderGcdOutput(d);
}

function lcmClickHandler() {
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    if (!a || !b) {
        console.log("error, invalid input");
        return;
    }
    let l = lcm(a, b);
    renderLcmOutput(l);
}

function toggleGcdOutput() {
    gcdOutput.classList.toggle('invisible');
}

function toggleLcmOutput() {
    lcmOutput.classList.toggle('invisible');
}

function toggleOutput() {
    toggleGcdOutput();
    toggleLcmOutput();
}

function renderGcdOutput(d) {
    gcdOutput.textContent = `${d}`;
    toggleGcdOutput();
}

function renderLcmOutput(l) {
    lcmOutput.textContent = `${l}`;
    toggleLcmOutput();
}



inputA.addEventListener('focus', toggleOutput);
inputB.addEventListener('focus', toggleOutput);
gcdBtn.addEventListener('click', gcdClickHandler);
lcmBtn.addEventListener('click', lcmClickHandler);


