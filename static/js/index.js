

const dice = [1, 2, 3, 4, 5, 6];
let currentScore = 0;

const rollDice = () => {
  const rolls = [];
  for (let i = 0; i < dice.length; i++) {
    rolls.push(dice[Math.floor(Math.random() * dice.length)]);
  }

  const diceResults = rolls.join(', ');
  const score = calculateScore(rolls);

  currentScore += score;

  document.getElementById('dice-results').innerHTML = diceResults;
  document.getElementById('total-score').innerHTML = currentScore;

  if (currentScore >= 10000) {
    alert('Congratulations! You won the game!');
    currentScore = 0;
    document.getElementById('total-score').innerHTML = currentScore;
  }
};

const calculateScore = (diceRoll) => {
  let score = 0;
  const occurrences = [];

  // Count the occurrences of each number
  for (const num of diceRoll) {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }

  // Check for 3 of a kind
  for (const num in occurrences) {
    if (occurrences[num] >= 3) {
      score += num * 100;
    }
  }

  // Check for 1's
  if (occurrences[1]) {
    score += occurrences[1] * 100;
  }

  // Check for 5's
  if (occurrences[5]) {
    score += occurrences[5] * 50;
  }

  // Check for a straight
  if (
    diceRoll.length === 6 &&
    diceRoll.includes(1) &&
    diceRoll.includes(2) &&
    diceRoll.includes(3) &&
    diceRoll.includes(4) &&
    diceRoll.includes(5) &&
    diceRoll.includes(6)
  ) {
    score += 1500;
  }

  return score;
};


document.getElementById('roll-dice').addEventListener('click', rollDice);
