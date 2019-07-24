'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor (color){
    if(color === 'red'){
      this.symbol = '✪';
      this.name = 'red';
      this.turn = 'redTurn';
    } else {
      this.symbol = '☯';
      this.name = 'black';
      this.turn = 'blackTurn';
    }
  }
}

const redChecker = new Checker('red');
const blackChecker = new Checker('black');

//I don't need this because my Checker class has an object value of turn
// function playerTurn(){
//   if (playerTurn === 'red'){
//     playerTurn = 'black'
//   } else {
//     playerTurn = 'red';
//   }
// }

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  setPieces(){
    for(let r = 0; r < 8; r ++){
      if(r < 3){
        for( let c = 0; c < 8; c ++){
          if ((c % 2 !== 0) && (r % 2 == 0)){
            this.grid[r][c] = redChecker;
            this.checkers.push(this.redChecker);
          } else if ((c % 2 == 0) && (r % 2 !== 0)){
            this.grid[r][c] = redChecker;
            this.checkers.push(this.redChecker);
            }
          }
      } else if (r > 4){
          for( let c = 0; c < 8; c ++){
            if ((c % 2 !== 0) && (r % 2 == 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(this.blackChecker);
            } else if ((c % 2 == 0) && (r % 2 !== 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(this.blackChecker);
            }
          }
        }
    }
  }
}


  // setPieces() {
  //   let redPieces = [
  //     [0, 1],
  //     [0, 3],
  //     [0, 5],
  //     [0, 7],
  //     [1, 0],
  //     [1, 2],
  //     [1, 4],
  //     [1, 6],
  //     [2, 1],
  //     [2, 3],
  //     [2, 5],
  //     [2, 7]
  //   ];

  //   for (let i = 0; i < 12; i ++){
  //     //the grid is made up of 8 rows that are arrays. the columns are the null indexes pushed into the arrays of rows. I have 12 red pieces that I'm going to push to the grid array, changing the index there from null to the value that is my redPiece. Loop through each array within the array of redPieces. the first index of each array is my rows, and the second index of each array within the array is my column value
  //     let redRow = redPieces[i][0]
  //     let redColumn = redPieces[i][1]

  //     this.grid[redRow][redColumn] = redChecker;
  //     this.checkers.push(redChecker);
      
  //   }

  //   let blackPieces = [
  //     [5, 0],
  //     [5, 2],
  //     [5, 4],
  //     [5, 6],
  //     [6, 1],
  //     [6, 3],
  //     [6, 5],
  //     [6, 7],
  //     [7, 0],
  //     [7, 2],
  //     [7, 4],
  //     [7, 6]
  //   ];

  //   for(let x = 0; x < 12; x ++) {
  //     let blackRow = blackPieces[x][0]
  //     let blackColumn = blackPieces[x][1]

  //     this.grid[blackRow][blackColumn] = blackChecker;
  //     this.checkers.push(blackChecker);
  //   }

  // }

  // moveChecker(whichPiece, toWhere){
  //   if(playerTurn === 'red'){
  //     redChecker = whichPiece.split('')
  //   } else {
  //     blackChecker = whichPiece.split('')
  //   }
  // }


class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.setPieces();
  }
  moveChecker(whichPiece, toWhere){
    if(isValid(whichPiece, toWhere)){

    }
  }
  isValid(whichPiece, toWhere){
    if((whichPiece === this.turn)){

    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
