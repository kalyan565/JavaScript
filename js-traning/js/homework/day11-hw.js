const Cchange = document.querySelector("#color-change");

Cchange.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const color = `rgb(${r}, ${g}, ${b})`
    console.log(color)
    document.body.style.backgroundColor = color;
})

const liveInput = document.querySelector("#less")


liveInput.addEventListener("input", () => {

    if(liveInput.value.length < 3) {
        liveInput.style.backgroundColor = "red";
    }
    else {
        liveInput.style.backgroundColor = "green";

    }
})


const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")

const sumbtn = document.querySelector("#sum")
const blwsum = document.querySelector("#below")

sumbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const sum = Number(num1.value) + Number(num2.value)
    blwsum.textContent = sum;
} )