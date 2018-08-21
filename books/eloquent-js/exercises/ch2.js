//=> 2.1 Looping A Triangle

for (let i = 0; i < 7; i++) {
  let finalLine = '#';
  for (let j = 0; j < i; j++) {
    finalLine += '#'
  }
  console.log(finalLine)
}

//=> 2.2 FizzBuzz

/* Clearly written
for(let i = 1; i <= 100; i++) {
  if(!(i % 3) && !(i % 5)) {
    console.log('FizzBuzz');
  } else if (!(i % 3)) {
    console.log('Fizz');
  } else if (!(i % 5)) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
*/

/* Using Tenary Operator */
for(let i = 1; i <= 100; i++) {
  console.log((!(i % 3) && !(i % 5)) ? 'FizzBuzz' : (!(i % 3)) ? 'Fizz': (!(i % 5)) ? 'Buzz' : i);
}


//=> 2.3 Chessboard

function chessBoard(size) {
  for(let i = 1; i <= size; i++) {
    let line = (i % 2) ? ' ' : '#';
    for (let j = 1; j < size; j++) {
      line += (line[line.length - 1] === '#') ? ' ' : '#'; 
    }
    console.log(line);
  }
}

