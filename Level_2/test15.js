// 124 나라의 숫자
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다
// 4 -> 11, 5 -> 12, 6 -> 14, 7 -> 21

let result = '';
const num = [4, 1, 2];

function solution(n) {
  result = num[n % 3] + result;
  if (n > 3) return solution(Math.floor((n - 1) / 3));
  return result;
}

// 아래코드는 테스트를 위한 코드입니다.
const n = 12;
// return 44;

console.log(solution(n));
