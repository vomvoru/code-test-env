const { solution } = require('./index');

test.each`
  arg                         | expected
  ${[1, 0, 0, 1, 0, 0]}       | ${2}
  ${[1, 1, 0, 1, 0, 0]}       | ${3}
  ${[1, 0, 0, 0, 0]}          | ${1}
  ${[0, 0, 1, 0, 1, 1, 1, 1]} | ${3}
  ${[]}                       | ${0}
  ${[1, 1, 1, 1, 1]}          | ${0}
  ${[0, 0, 0, 0, 0]}          | ${0}
`('returns $expected when $arg', ({ arg, expected }) => {
  expect(solution(arg)).toBe(expected);
});
