export function b(inputString, days = 80) {
  let fishes = parseFishes(inputString);
  let fishesObj = getInitialFishCounter();
  addInitialFishesToFishCounter(fishes, fishesObj);
  grow(days, fishesObj);
  const sum = getTotalFishCount(fishesObj);
  return sum;
}

function parseFishes(inputString) {
  return inputString.split(",").map(f => parseInt(f, 10));
}

function grow(days, fishesObj) {
  for (let i = 0; i < days; i++) {
    const nrOfNewFishes = fishesObj[0];
    for (let j = 0; j < 8; j++) {
      fishesObj[j] = fishesObj[j + 1];
    }
    fishesObj[6] += nrOfNewFishes;
    fishesObj[8] = nrOfNewFishes;
  }
}

function getInitialFishCounter() {
  return {
    0: 0,
    1: 0,
    2: 0, 
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  };
}

function getTotalFishCount(fishesObj) {
  let sum = 0;
  for(let j = 0; j < 9; j++) {
    sum += fishesObj[j];
  }
  return sum;
}

function addInitialFishesToFishCounter(fishes, fishesObj) {
  for(const fish of fishes) {
    fishesObj[fish]++;
  }
}