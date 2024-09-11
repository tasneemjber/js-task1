function fontSmall(){
    document.querySelector('h2').classList.add('fontsmall');
    document.querySelector('p').classList.add('fontsmall');
    document.querySelector('h2').classList.remove('fontLarge');
    document.querySelector('p').classList.remove('fontLarge');
}
function fontLarge(){
    document.querySelector('h2').classList.add('fontLarge');
    document.querySelector('p').classList.add('fontLarge');
    document.querySelector('h2').classList.remove('fontsmall');
    document.querySelector('p').classList.remove('fontsmall');
}
document.querySelector(".IncreaseSize").onclick=fontLarge;
document.querySelector(".decreaseSize").onclick=fontSmall;