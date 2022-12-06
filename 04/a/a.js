export function getScoreForWinningBoard(inputString) {
  const input = parseInput(inputString);
  const numbers = parseNumbers(input);
  const boards = parseBoards(input.slice(2));
  for(const number of numbers) {
    for(let board of boards) {
      draw(board, number);
      if(isWinner(board)) {
        const score = getScore(board, number);
        return score;
      }
    }
  }
  return 0;
}

export function parseInput(inputString) {
  return inputString.replace(/  /g, " ").split("\n");
}

export function parseNumbers(input) {
  return input[0].split(",").map(n => parseInt(n, 10));
}

export function parseBoards(rows) {
  let boards = [[]];
  let boardsIndex = 0;
  let rowIndex = 0;
  for(const row of rows) {
    if(row === "") {
      boardsIndex++;
      boards.push([]);
      rowIndex = 0;
      continue;
    }
    boards[boardsIndex][rowIndex] = [];
    const rowContent = row.trim().split(" ");
    for(let col = 0; col < rowContent.length; col++) {
      boards[boardsIndex][rowIndex][col] = parseInt(rowContent[col], 10);
    }
    rowIndex++;
  }
  return boards;
}

export function draw(board, number) {
  const width = board.length;
  const height = board[0].length;
  for(let col = 0; col < width; col++) {
    for(let row = 0; row < height; row++) {
      if(board[row][col] === number) {
        board[row][col] = undefined;
      }
    }
  }
  return board;
}

export function isWinner(board) {
  const width = board.length;
  const height = board[0].length;
  for(let col = 0; col < width; col++) {
    let winnerCol = true;
    for(let row = 0; row < height; row++) {
      if(board[row][col] !== undefined) {
        winnerCol = false;
      }
    }
    if(winnerCol) {
      return true;
    }
  }

  for(let row = 0; row < height; row++) {
    let winnerRow = true;
    for(let col = 0; col < width; col++) {
      if(board[row][col] !== undefined) {
        winnerRow = false;
      }
    }
    if(winnerRow) {
      return true;
    }
  }

  return false;
}

export function getScore(board, draw) {
  let sum = 0;
  const width = board.length;
  const height = board[0].length;
  for(let col = 0; col < width; col++) {
    for(let row = 0; row < height; row++) {
      if(board[row][col]) {
        sum += board[row][col];
      }
    }
  }
  return sum * draw;
}