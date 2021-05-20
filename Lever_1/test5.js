// 정수 내림차순으로 배치하기

// 내가 푼 방법
function solution(n) {
  let answer = 0;
  const take = n.toString();
  const array = [];

  for (let i = 0; i < take.length; i++) {
    array.push(take[i]);
  }
  array.sort((a, b) => b - a);
  for (let j = 0; j < array.length; j++) {
    answer += array[j];
  }
  answer = parseInt(answer);
  return answer;
}

// 다른사람이 푼 방법
function solution2(n) {
  const newN = n + '';
  const newArr = newN.split('').sort().reverse().join('');

  return +newArr;
  // 단항 연산자 + 를 사용하여 값을 숫자로 변환할 수 있다
}

// 아래 코드는 테스트를 위한 코드입니다.
n = 83712;

console.log(solution(n));
console.log(solution2(n));
