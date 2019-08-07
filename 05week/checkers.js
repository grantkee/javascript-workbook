'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function switchPlayer(){
  if(playerTurn === blackChecker){
    playerTurn = redChecker;
  } else {
    playerTurn = blackChecker;
  }
}


class Checker {
  constructor (color){
    if(color === 'red'){
      this.symbol = '✪';
      this.color = color;
    } else {
      this.symbol = '☯';
      this.color = color;
    }
  }
}

const redChecker = new Checker('red');
const blackChecker = new Checker('black');
let playerTurn = blackChecker;



const is07 = (startX, startY, endX, endY) => {
  if( (startX || startY || endX || endY) >= 0 && (startX || startY || endX || endY) <= 7){
    return true;
  }
}

const diagonalMove = (startX, startY, endX, endY, whichPiece, toWhere) => {
  if(playerTurn === blackChecker){
    if((endX - startX === -1) && (endY - startY === 1 || endY - startY === -1)){
      return true;
    }
  } else if(playerTurn === redChecker){
    if((endX - startX === 1) && (endY - startY === 1 || endY - startY === -1)){
      return true;
    } //this is getting a little hairy and still not working. I tried to add my jumpPiece function into my daigonalMove because the diagonalMove function is returning a falsy value when the user tries to jump. that's because the user's endX and startX is 2. this test checks for 1...
  } else {
    return false;
  }
}

const isWhichPieceThere = (startX, startY) =>{
  if( game.board.grid[startX][startY] !== null && playerTurn.symbol === game.board.grid[startX][startY].symbol ){
    return true;
  }
}

const isToWhereEmpty = (endX, endY) => {
  if(game.board.grid[endX][endY] === null){
    return true;
  }
}



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
            this.checkers.push(redChecker);
          } else if ((c % 2 == 0) && (r % 2 !== 0)){
            this.grid[r][c] = redChecker;
            this.checkers.push(redChecker);
            }
          }
      } else if (r > 4){
          for( let c = 0; c < 8; c ++){
            if ((c % 2 !== 0) && (r % 2 == 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(blackChecker);
            } else if ((c % 2 == 0) && (r % 2 !== 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(blackChecker);
            }
          }
        }
      }
      //do a counter for blackChecker and redCheckers within the array - filter and check values
      console.log(this.checkers.length)
    }
  jumpPiece (startX, startY, whichPiece, toWhere){
    //I'm not sure what i'm targeting on the grid when I check blackUpRight. I want it to return a symbol, but it's returning undefined...
    let jump = whichPiece - toWhere;

    if(playerTurn.color === blackChecker.color){
      let blackUpRight = this.grid[startX - 1][startY + 1];
      let blackUpLeft = this.grid[startX - 1][startY - 1];
      if(jump === 18 && this.symbol !== playerTurn.symbol && blackUpRight !== null){
        let x = this.grid[whichPiece[0]][whichPiece[1]];
        // console.log(typeof (startX - 1))
        // console.log(typeof (startY + 1))
        //realized that my whichPiece[1] is returning as a string, unlike the [0] index. I'm not sure why, but for tonight i'm just gonna parseInt() that value
        this.grid[whichPiece[0]][whichPiece[1]] = null;
        this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) + 1] = null;
        this.grid[toWhere[0]][toWhere[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]));
        switchPlayer();
      } else if (jump === 22 && blackUpLeft !== playerTurn.symbol && blackUpLeft !== null){
        let x = this.grid[whichPiece[0]][whichPiece[1]];
        this.grid[whichPiece[0]][whichPiece[1]] = null;
        this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) - 1] = null;
        this.grid[toWhere[0]][toWhere[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]))
        switchPlayer();
      } else {
        console.log('that is not a valid jump')
        return false;
      }
    }
  
    else if (playerTurn.color === redChecker.color){  
      let redDownRight = this.grid[startX + 1][startY + 1];
      let redDownLeft = this.grid[startX + 1][startY - 1];
      console.log(redDownLeft)
      if(jump === -18 && this.symbol !== playerTurn.symbol && redDownLeft !== null){
        let x = this.grid[whichPiece[0]][whichPiece[1]];
        this.grid[startX][startY] = null;
        this.grid[startX + 1][startY + 1] = null;
        this.grid[startX + 1][startY - 1] = null;
        this.grid[toWhere[0]][toWhere[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]))
        switchPlayer();
      } else if (jump === -22 && redDownRight !== playerTurn.symbol && redDownRight !== null){
        let x = this.grid[whichPiece[0]][whichPiece[1]];
        this.grid[startX][startY] = null;
        this.grid[startX + 1][startY + 1] = null;
        this.grid[toWhere[0]][toWhere[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]));
        switchPlayer();
      } else {
        console.log('that is not a valid jump')
        return false;
      }
    }
  }
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
    let start = whichPiece.split('');
    let end = toWhere.split('');
    let startX = parseInt(start[0]);
    let startY = parseInt(start[1]);
    let endX = end[0];
    let endY = end[1];

    if(is07(startX, startY, endX, endY)){
      if (isWhichPieceThere(startX, startY)){
        if(diagonalMove(startX, startY, endX, endY)){
          if(isToWhereEmpty(endX, endY)) {
            let x = this.board.grid[whichPiece[0]][whichPiece[1]];
            this.board.grid[whichPiece[0]][whichPiece[1]] = null;
            this.board.grid[toWhere[0]][toWhere[1]] = x;
            switchPlayer();
          }
        } else if (startX - endX == 2 || endX - startX == 2) {
          this.board.jumpPiece(startX, startY, whichPiece, toWhere)
        } else console.log('The move must be diagonal')
      } else {
        console.log('The piece you are trying to move is not there');
      }
    } else {
      console.log ('Oops, try again')
    }
  }
}

  


function getPrompt() {
  console.log('~~~~~~~~~~~~~~~~~~~');
  console.log(`Player Turn: ${playerTurn.symbol}`)
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
