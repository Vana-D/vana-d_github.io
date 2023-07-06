const menu = document.querySelector('.menu');
const btnOpen = document.querySelector(".btn");
const btnClose = document.querySelector('.closebtn');


btnOpen.addEventListener('click', e => {
    document.getElementById("mySidenav").style.width = "220px";
})

btnClose.addEventListener('click', e => {
    document.getElementById("mySidenav").style.width = "0";
})

// Animation 
let spanText = function spanText(text) {
    let string = text.innerText;
    let spanned = '';
    for (let i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spanned += string.substring(i, i + 1);
      else spanned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spanned;
}
  
let headline = document.querySelector(".animation");
spanText(headline);

  
let animations = document.querySelectorAll('.animation');
animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
    letter.style.animationDelay = (i * 0.1) + 's';
    })
})
  
// Form Validate Name
const nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', function(){
    allLetter(nameInput);
})
function allLetter(nameInput){ 
    let letters =  /^[A-Za-z\s]*$/;
    if(nameInput.value.match(letters)){
    return true;   
} else {
    alert('Name field must have alphabet characters only');
    nameInput.focus();
    return false;}
}
