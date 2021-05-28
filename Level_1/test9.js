// 평균구하기

function solution2(arr) {
  let answer = 0;
  arr.forEach(number => (answer += number / arr.length));
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.
const arr = [1, 2, 3, 4]; // 2.5

console.log(solution2(arr));
