export function getMinFuel2(inputString) {
  const positions = inputString.split(",").map(p => parseInt(p, 10));
  const min = Math.min(...positions);
  const max = Math.max(...positions);
  let minFuel = Number.POSITIVE_INFINITY;
  for(let alignmentPos = min; alignmentPos <= max; alignmentPos++) {
    let sum = 0;
    for(const pos of positions){
      const dist = Math.abs(alignmentPos - pos);
      const fuel = triangleNumber(dist);
      sum += fuel;
    }
    if(sum < minFuel) {
      minFuel = sum;
    }
  }
  return minFuel;
}

function triangleNumber(n) {
  return (n*n + n) / 2;
}