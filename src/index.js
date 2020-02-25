module.exports = function reverse (n) {
  return Math.abs(Number.parseInt(n.toString().split('').reverse().join('')))
}
