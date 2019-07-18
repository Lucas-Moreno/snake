const canvas = document.getElementById('canvas');
const snake = canvas.getContext('2d');
const eat = canvas.getContext('2d');


function create(){
    xSnake = 0;
    ySnake = 0;
    xSnakeSpeed = 25;
    ySnakeSpeed = 0;
}
function draw(){
    snake.fillStyle = "red"; //  couleur
    snake.fillRect(xSnake, ySnake, 25, 25); // rectangle
}
function update(){
    xSnake = xSnake + xSnakeSpeed;
    ySnake = ySnake + ySnakeSpeed;
}

function game(){
    create();
    window.setInterval(function(){ 
        snake.clearRect(xSnake ,ySnake,25,25);
        update();
        draw();
    }, 250);
}
game();





//  snake.clearRect(0,0,25,25);




