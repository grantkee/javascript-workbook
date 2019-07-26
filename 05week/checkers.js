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

//not sure where to put this function yet, so I'm just gonna build it here
function isJumpValid(start, end){

}


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

      isSingleMove(whichPiece, toWhere) 

    }
  }

  validInput(whichPiece, toWhere){

    let start = whichPiece.split('');
    let end = toWhere.split('');
    let startX = start[0];
    let startY = start[1];
    let endX = end[0];
    let endY = end[1];

    const is07 = num => {
      if( (startX || startY || endX || endY) >= 0 && (startX || startY || endX || endY) <= 7){
        return true;
      } else {
        return false;
      }
    }
    
    const isInputOdd = coor => {
      if(((startX + startY) || (endX + endY)) % 2 !== 0){
        return true;
      } else {
        return false;
      }
    }

    const isWhichPieceThere = check =>{
      if(this.board.checkers)
    }

    const isToWhereEmpty = space => {
      if(this.board.grid[endX][endY] === null){
        return true;
      } else {
        return false;
      }

      //if all return true, call moveChecker function
      if(is07 && isInputOdd && isWhichPieceThere && isToWhereEmpty){
        this.moveChecker()
      }
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
