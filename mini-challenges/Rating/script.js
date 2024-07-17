
const main_div = document.querySelector('.main-div');
const rating_div = document.querySelector("#rating-message");
const ratingMessages = {
    1: 'Terrible 😠',
    2: 'Bad 😞',
    3: 'Average 😐',
    4: 'Good 😊',
    5: 'Excellent 😍'
};
main_div.addEventListener('change',()=>{
    const selectedStar = document.querySelector('input[type=radio]:checked').value;
    console.log(selectedStar)

    const ratingDiv = document.createElement('div');
    rating_div.innerHTML = "";
console.log(ratingMessages[selectedStar])

    ratingDiv.innerHTML = `
    <h1>${ratingMessages[selectedStar]}</h1>
    `;
    rating_div.append(ratingDiv);
})