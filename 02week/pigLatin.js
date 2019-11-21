'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let finalPhrase = [];

function pigLatin( word ) {
  //the first thing I need to do is to create an array of just seperateWords. If the user puts in multiple words, this condition should separate these words and add them to an array I called seperateWords
  let seperateWords = word.split(' ');

//once I have each word as an array, I'm going to create another array of just seperateWords (for each word). Using a for loop
  for (let x = 0; x < seperateWords.length; x++){
    let letters = seperateWords[x];
    letters = letters.trim().toLowerCase().split('');

//breaks two words into two arrays

  let newWord = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  if ( vowels.includes(letters[0]) ) {
    newWord = letters.join('') + 'ay';
    finalPhrase.push(newWord);

  } else {

    for (let i = 0; i < letters.length; i++) {

      if ( ! vowels.includes(letters[i]) ){
        newWord.push(letters[i]);
      } else {
        newWord = letters.slice(i, letters.length).concat(newWord).join('') + 'ay';
        break;    
      };
    };

    finalPhrase.push(newWord);

  };

  return finalPhrase.join(' ');

  };
};


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
    function empty(){
      finalPhrase.length = 0;
    };
    empty(); 
  });
};

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

};
