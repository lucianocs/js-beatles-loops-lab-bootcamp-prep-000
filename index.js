function theBeatlesPlay(musicians,instruments){
var derp = [''];
var i
  for ( i = 0 ; i < musicians.length ; i++ ) {

    if ( i === 0){
      derp[i] = musicians[i] + ' plays '+instruments[i]
    }else{
      derp.push(musicians[i] + ' plays '+instruments[i])
    }
  }
  return derp
}

/*
+ Create a function `johnLennonFacts`. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):

```js
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
```

Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact. The function should return an array of strings with exclamation points.
*/

function johnLennonFacts(facts){
var exclamation = ['']
var i
  while (i < facts.length) {
    exclamation = facts[i] + '!!!'
  }
  return exclamation
}