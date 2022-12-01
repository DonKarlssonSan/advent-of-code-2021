export function getPowerConsumption(rowsString) {
  const rows = rowsString.split("\n");
  let gammaString = '';
  let epsilonString = '';
  const length = rows[0].length;
  for(let column = 0; column < length; column++) {
    let zeros = 0;
    let ones = 0;
    for(const row of rows) {
      if(row[column] === "0") {
        zeros++;
      } else if(row[column] === "1") {
        ones++;
      }
    }
    if(ones > zeros) {
      gammaString += "1";
      epsilonString += "0";
    } else {
      gammaString += "0";
      epsilonString += "1";
    }
  }
  return parseInt(gammaString, 2) * parseInt(epsilonString, 2);
}