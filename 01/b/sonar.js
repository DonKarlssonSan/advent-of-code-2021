export function getNrOfIncreasesWindow(measurementsString) {
  const measureMentsStringArray = measurementsString.split("\n");
  const measurements = measureMentsStringArray.map(val => Number.parseFloat(val, 10));
  let increases = 0;
  for(let i = 0; i < measurements.length - 3; i++) {
    const currentWindow = measurements[i] +  measurements[i+1] + measurements[i+2];
    const nextWindow = measurements[i+1] + measurements[i+2] + measurements[i+3];
    if(currentWindow < nextWindow) {
      increases++;
    }
  }
  return increases;
}