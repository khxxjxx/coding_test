// 최대공약수와 최소공배수

function solution(n, m) {
  let answer = [],
    n2 = [],
    m2 = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      n2.push(i);
      console.log(n2);
    }
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) {
      m2.push(i);
      console.log(m2);
    }
  }

  const 교집합 = n2.filter(x => m2.includes(x));
  answer.push(교집합[교집합.length - 1]);
  answer.push(+answer * (n / +answer) * (m / +answer));
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const n = 6;
const m = 12;
// return [3, 12]

console.log(solution(n, m));
