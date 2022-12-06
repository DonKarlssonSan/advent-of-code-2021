export function a(inputString, size = 10, includeDiagonalLines = false) {
  const rows = inputString.split("\n");
  let lines = parseLines(rows, includeDiagonalLines);
  let grid = createGrid(size);
  updateGrid(grid, lines, size);
  //console.log(grid);
  return getNrOfPointsAbove1(grid);
}

export function parseLines(rows, includeDiagonalLines) {
  // 0,9 -> 5,9
  let lines = [];
  for(const row of rows) {
    const [start, end] = row.split(" -> ");
    const [x1, y1] = start.split(",");
    const [x2, y2] = end.split(",");
    let line = [x1, y1, x2, y2].map(s => parseInt(s, 10));

    lines.push(line);
  }
  if(!includeDiagonalLines) {
    lines = lines.filter(l => (l[0] === l[2] || l[1] === l[3]) && !(l[0] === l[2] && l[1] === l[3]));
  }
  return lines;
}

function createGrid(size) {
  let grid = [];
  for(let x = 0; x < size; x++) {
    grid.push([]);
    for(let y = 0; y < size; y++) {
      grid[x][y] = 0;
    }
  }
  return grid;
} 

export function updateGrid(grid, lines, size) {
  for(let x = 0; x < size; x++) {
    for(let y = 0; y < size; y++) {
      for(const line of lines) {
        const a = [line[0], line[1]];
        const b = [line[2], line[3]];
        if(isPointBetween([x, y], a, b)){
          grid[y][x]++;
        }
      }
    }
  }
}

export function isPointBetween(p, a, b) {
  const [x0, y0] = p;
  const [x1, y1] = a;
  const [x2, y2] = b;

  const pa = Math.hypot(x0-x1, y0-y1);
  const ab = Math.hypot(x1-x2, y1-y2);
  const pb = Math.hypot(x0-x2, y0-y2);

  return ab === pa + pb;
}

export function getNrOfPointsAbove1(grid) {
  let sum = 0;
  for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      if(grid[x][y] > 1) {
        sum++;
      }
    }
  }
  return sum;
}