const counter_page = document.querySelector(".counter-div");
const inputValue = counter_page.querySelector("input");
const Increment = counter_page.querySelector(".increment");
const Decrement = counter_page.querySelector(".decrement");
const reset = counter_page.querySelector(".reset")
const count = counter_page.querySelector("h1");

console.log(counter_page);

Increment.addEventListener("click",()=>{
    let value = parseInt(count.textContent) + parseInt(inputValue.value);
    if(value < 0){
        return alert("Negative Number !!!")
    }
    if(inputValue.value === ""){
        return alert("enter Number!!")
    }
    count.innerText = value
    
});

Decrement.addEventListener("click",()=>{
    let value = parseInt(count.textContent) - parseInt(inputValue.value);
    if(value < 0){
        return alert("Negative Number !!!")
    }
    if(inputValue.value === ""){
        return alert("enter Number!!")
    }
    count.innerText = value
})

reset.addEventListener("click",()=>{
    count.innerText = 0
    inputValue.innerText = 0
})