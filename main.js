//let input = 'Welcome';
let input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++){
 // console.log('i is ' +input[i]);

  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++){
    //console.log('j is '+ vowels[j]);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
}

//console.log(resultArray);
console.log(resultArray.join('').toUpperCase());