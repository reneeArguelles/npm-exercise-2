const { argv } = require('node:process');
let vowelCount = 0;

[...argv.slice(2).join(' ').toLowerCase()].forEach((character) => {
  if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
    vowelCount++;
  }
});

console.log(`Argument Count: ${argv.length - 2}
Total Vowel Count: ${vowelCount}`);
