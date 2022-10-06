// Variables \\

const Cookie = document.getElementById("Cookie");
const Counter = document.getElementById("Counter");
const Upgrade = document.getElementById("Upgrade");
const AutoClicker = document.getElementById("AutoClicker");
const Woah = document.getElementById("Woah");

let count = 0;
let Increment = 1;
let cost = 50;
let AutoClickerCost = 100;
let AutoClickerCount = 0;



// Code \\

function UpdateCounter() {

    Counter.innerHTML = `Count: ${count}`;

};

setInterval(() => {

    count += Increment*AutoClickerCount;
    
    UpdateCounter()

}, 1000)

AutoClicker.onclick = () => {

    if(count < AutoClickerCost) {return};

    AutoClickerCount++;
    count -= AutoClickerCost;
    AutoClickerCost += 50;

    AutoClicker.textContent = "Buy autoclicker " + AutoClickerCost;

    UpdateCounter();

}

Upgrade.onclick = () => {

    if(count < cost) {return};

    Increment++;
    count -= cost;
    cost += 10;

    Upgrade.textContent = "Buy upgrade " + cost;

    UpdateCounter();

};

Cookie.onclick = () => {

    count += Increment;

    UpdateCounter();

};

Woah.onclick = () => {

    count += 1e100;

    UpdateCounter();

}