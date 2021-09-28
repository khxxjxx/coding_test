// 숫자의 표현
// 자연수 n을 연속된 자연수로 표현하는 방법의 개수를 구해라
// 1 + 2 + 3 + 4 + 5 = 15, 4 + 5 + 6 = 15, 7 + 8 = 15, 15 = 15  ==>  총 4개

function solution(n) {
  let count = 0;

  const sum = num => {
    let initial = 0;
    for (num; num < n; num++) {
      initial += num;
      if (initial === n) return true;
      if (initial > n) return false;
    }
  };

  for (let i = 1; i < n; i++) {
    if (sum(i)) count++;
  }
  return count + 1;
}

// 아래코드는 테스트를 위한 코드입니다.
const n = 15; // return 4

console.log(solution(n));
