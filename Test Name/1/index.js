const TAIL = 1;
const HEAD = 0;

function solution(coins) {
  return getMinNumThatMustBeReversed(coins);
}

const getMinNumThatMustBeReversed = coins => {
  const tailNum = getTailNum(coins);
  const headNum = getHeadNum(coins);

  return Math.min(tailNum, headNum);
};

const getTailNum = coins => coins.filter(val => val === TAIL).length;

const getHeadNum = coins => coins.filter(val => val === HEAD).length;

module.exports = { solution };
