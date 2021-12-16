const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'white', 'gray', 'brown', 'silver', 'black'];

body.style.backgroundColor = 'black';
button.addEventListener('click', changeBodyColor);

function changeBodyColor(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}