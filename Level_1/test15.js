// 예산
// 예산에 맞춰 최대한 많은 부서의 물품을 구매해 주기

function solution(d, budget) {
  let answer = 0;
  let add = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    add += d[i];
    if (add <= budget) {
      answer++;
    }
  }
}

// 아래 코드는 테스트를 위한 코드입니다.
const d = [1, 1, 2, 2, 4]; // 부서별로 신청한 금액
const budget = 5; // 예산
// return 3

console.log(solution(d, budget));
