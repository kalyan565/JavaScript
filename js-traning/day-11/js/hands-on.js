const button = document.querySelector("#counter-btn")
const countSpan = document.querySelector("#count")

let count = 0;
button.addEventListener("click", () => {
    if(count < 10) {
        count++;
        countSpan.textContent =  count;
    } else  {
        countSpan.textContent = "Stop Clicking"
    }
})

const LiveInput = document.querySelector("#live-input")
const preview = document.querySelector("#preview")

LiveInput.addEventListener("keydown", (e) => {
    preview.textContent = e.key;
})

const regForm = document.querySelector("#reg-form")
const nameFiled = document.querySelector("#name-field")
const welcome = document.querySelector("#welcome")

welcome.textContent = "please enter your name"
regForm.addEventListener("submit" , (e)=> {
    e.preventDefault();
   
    if(nameFiled === "") {
        welcome.textContent = "please enter your name"
    } else {
    welcome.textContent = `Welcome, ${nameFiled.value}`
    }


})

document.querySelectorAll("#todo-list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    
  });

})