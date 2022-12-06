export function a(inputString, days = 80) {
  let fishes = inputString.split(",").map(f => parseInt(f, 10));
  for(let i = 0; i < days; i++) {
    let nrOfNewFishes = 0;
    for(let f = 0; f < fishes.length; f++) {
      if(fishes[f] === 0) {
        fishes[f] = 6;
        nrOfNewFishes++; 
      } else {
        fishes[f]--;
      }
    }
    for(let j = 0; j < nrOfNewFishes; j++) {
      fishes.push(8);
    }
  }
  return fishes.length;
}