function getBit(val, position) {
  return (val >> position) & 1
}

function num2bits(num) {
  var bits = []
  for (let i = 0; i < 32; i++) {
    let bit = getBit(num, i)
    bits.unshift(bit)
  }

  return bits
}