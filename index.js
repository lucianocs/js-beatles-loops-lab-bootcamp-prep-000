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


function johnLennonFacts(facts){
var exclamation = ['']
var i = 0
  while (i < facts.length) {
    exclamation[i] = facts[i] + '!!!'
    i++
  }
  return exclamation
}
