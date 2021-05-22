// 입력받은 n값큼 수박출력하기

function solution(n) {
  const soo = '수',
    park = '박';
  let answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer = answer.concat(soo);
    } else {
      answer = answer.concat(park);
    }
  }
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.
const n = 3; // 수박수

console.log(solution(n));
