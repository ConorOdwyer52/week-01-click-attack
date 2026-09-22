let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const powerButton = document.createElement("button");

// TODO: create addPoint()
function addPoint() {
	score++;
	updateDisplay();
	}

// TODO: create resetGame()
function resetGame() {
	score = 0;
	title.innerText = "Click Attack";
	updateDisplay();
	}

function powerAttack() {
	score += 5;
	updateDisplay();
	}

function updateDisplay() {
	scoreDisplay.innerText = score;
	if (score >= 20) {
		title.innerText = "YOU WIN!";
		}
	}
// TODO: connect both functions to buttons
	attackButton.addEventListener("click", addPoint);
	powerButton.addEventListener("click", powerAttack);
	resetButton.addEventListener("click", resetGame);
