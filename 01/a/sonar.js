export function getNrOfIncreases(measurementsString) {
  const measureMentsStringArray = measurementsString.split("\n");
  const measurements = measureMentsStringArray.map(val => Number.parseFloat(val, 10));
  let increases = 0;
  for(let i = 0; i < measurements.length - 1; i++) {
    const current = measurements[i];
    const next = measurements[i+1];
    if(current < next) {
      increases++;
    }
  }
  return increases;
}