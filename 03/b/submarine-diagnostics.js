export function getLifeSupportRating(rowsString) {
  const rows = rowsString.split("\n");
  let oxygen = [...rows];
  let co2 = [...rows];
  const length = rows[0].length;
  for(let column = 0; column < length; column++) {
    const digits = getDigitCount(oxygen, column);
    if(digits["1"] >= digits["0"]) {
      oxygen = oxygen.filter(bits => bits[column] === "1");
    } else {
      oxygen = oxygen.filter(bits => bits[column] === "0");
    }
    if(oxygen.length === 1) {
      break;
    }
  }
  for(let column = 0; column < length; column++) {
    const digits = getDigitCount(co2, column);
    if(digits["1"] >= digits["0"]) {
      co2 = co2.filter(bits => bits[column] === "0");
    } else {
      co2 = co2.filter(bits => bits[column] === "1"); 
    }
    if(co2.length === 1) {
      break;
    }
  }
  return parseInt(oxygen[0], 2) * parseInt(co2[0], 2);
}

function getDigitCount(rows, column) {
  let digits = {
    "0": 0,
    "1": 0
  };
  for(const row of rows) {
    const digit = row[column];
    digits[digit] += 1;
  }
  return digits;
}