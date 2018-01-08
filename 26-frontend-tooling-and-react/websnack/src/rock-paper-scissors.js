module.exports = (c1, c2) => {
  if (c1 === 'rock' && c2 === 'scissors') {
    return true;
  } else if (c1 === 'paper' && c2 === 'rock') {
    return true;
  } else if (c1 === 'scissors' && c2 === 'paper') {
    return true;
  }
  return false;
}