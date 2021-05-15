// 글자의 가운데 글자 구하기 짝수일경우 두자리 숫자로 구하기
let input = prompt('입력값');
let half = input.length / 2;
let result;

function put(input) {
  if (half % 1 === 0) {
    result = input.substr(half - 1, 2);
  } else {
    result = input.substr(half, 1);
  }
  return result;
}

console.log(put(input));

// 다시 짠거
function solution(s) {
  let answer = '';
  let half = s.length / 2;
  if (half % 1 === 0) {
    answer = s.substr(half - 1, 2);
  } else {
    answer = s.substr(half, 1);
  }
  return answer;
}
let s = 'abcde';
console.log(solution(s));
