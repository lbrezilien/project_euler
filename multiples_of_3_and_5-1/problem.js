const threeFiveMultiplesOf = (number) => {
  let i = 0
  let total = 0
  while(i < number){
    if(i % 3 === 0) {
      total += i;
      i++;
      continue
    }
    if(i % 5 === 0) {
      total += i;
      i++;
      continue
    }
    i++
  }
  return total
}

threeFiveMultiplesOf(100)

module.exports = threeFiveMultiplesOf;
