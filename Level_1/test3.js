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

// 아래 코드는 테스트를 위한 코드입니다.
a = 3;
b = 23;

console.log(solution(a, b));
