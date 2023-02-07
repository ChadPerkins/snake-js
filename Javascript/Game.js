import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED,
    getSnakeHead,
    snakeIntersection,
} from "./Snake.js";
import { update as updateFood, draw as drawFood } from "./Food.js";
import { outsideGrid } from "./Grid.js";

const gameBoard = document.getElementById("game-board");

let gameOver = false;
let lastRenderTime = 0;

function main(currentTime) {
    if (gameOver) {
        if (confirm("Game Over! Press ok to restart")) {
            // Refresh the page to restart the game
            window.location = "/";
        }
        return;
    }

    window.requestAnimationFrame(main);

    // Get the time in seconds each frame takes to render
    const frameRenderedTime = (currentTime - lastRenderTime) / 1000;
    if (frameRenderedTime < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
