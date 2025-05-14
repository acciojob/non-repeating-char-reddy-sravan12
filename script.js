function firstNonRepeatedChar(str) {
  const mapper=new Map()
  for (let char=0; char< str.length;char++){
    //   console.log(mapper.has(str[char]))
      if(!mapper.has(str[char])){
          mapper.delete(str[char])
      }
      mapper.set(str[char],(mapper.get(str[char])||0)+1)
  }
  for (let char of mapper){
      if(char[1]===1){
          return char[0]
      }
  }
  return null
}

firstNonRepeatedChar('aabbc')


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
