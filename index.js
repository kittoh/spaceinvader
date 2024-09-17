import EnemyController from "./EnemyController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./assets/images/space.png";

const playerImg = new Image();
playerImg.src = "./assets/images/player.png";

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 50,
    width: 50, // Adjust width according to your image
    height: 30, // Adjust height according to your image
    speed: 5,
};

const bullets = [];
const invaders = [];
const invaderRows = 5;
const invaderCols = 10;
const invaderWidth = 40;
const invaderHeight = 30;
const invaderPadding = 10;
const invaderOffsetTop = 30;
const invaderOffsetLeft = 30;
function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

background.onload = () => {
    requestAnimationFrame(game);
};
const enemyController = new EnemyController(canvas);

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    enemyController.draw(ctx);
    requestAnimationFrame(game);
}
