// 2016년 요일 반환하기

function solution(a, b) {
  let answer = '';
  let result = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  function days(month) {
    for (let i = 1; i < a; i++) {
      b += month(i);
    }
    return b;
  }

  function month(m) {
    if ((m < 8 && m % 2 === 1) || (m > 7 && m % 2 == 0)) {
      m = 31;
    } else if (m === 2) {
      m = 29;
    } else {
      m = 30;
    }
    return m;
  }

  answer = days(month) % 7;
  return result[answer];
}

let a = 3;
let b = 3;

console.log(solution(a, b));
