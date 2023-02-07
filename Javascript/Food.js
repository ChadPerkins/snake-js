import { onSnake, expandSnake } from "./Snake.js";
import { randomGridPosition } from "./Grid.js";

let food = randomFoodPosition();
const EXPANSION_RATE = 5;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = randomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function randomFoodPosition() {
    let newFoodPos;
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition();
    }
    return newFoodPos;
}
