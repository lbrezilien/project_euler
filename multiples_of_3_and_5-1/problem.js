const threeFiveMultiplesOf = (number) => {
  let i = 1
  let total = 0
  while(i <= number){
    if(i % 3 === 0) {
      total += i;
      i+= 1;
      continue
    }
    if(i % 5 === 0) {
      total += i;
      i+= 1;
      continue
    }
  }
  return total
}

threeFiveMultiplesOf(100)

module.exports = threeFiveMultiplesOf;
