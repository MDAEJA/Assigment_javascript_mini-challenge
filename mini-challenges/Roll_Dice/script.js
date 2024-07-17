const dice_div = document.querySelector(".main-div");
const h1 = dice_div.querySelector("h1")

const dice_images = ['./imgaes/dice1.png','./imgaes/dice2.png','./imgaes/dice3.png','./imgaes/dice4.png','./imgaes/dice5.png','./imgaes/dice6.png']
// document.addEventListener('DOMContentLoaded', () => {
    const buttonDiv = document.querySelector(".button-div");

    let randomNumber = ()=>{ 
        return Math.floor(Math.random()*dice_images.length) 
    };

    buttonDiv.addEventListener('click',()=>{
        buttonDiv.classList.toggle('button-div-click')
     h1.innerHTML = `<h4>Game Started !!!</h4>`
        setTimeout(()=>{
            dice_div.innerHTML = '';
            dice_images.map((item)=>{
                let value = randomNumber();
                
                const createDiv = document.createElement('div');
                createDiv.innerHTML = `
                
                <div class='dice-div-click'>
                <img src = ${dice_images[value]} width='50px'></img>
                </div>
                `;
                dice_div.append(createDiv)
                
            })
        },1000)

        
        
    })
    


    
// });