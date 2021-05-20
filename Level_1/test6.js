function solution(arr, divisor) {
  const answer = arr
    .filter(number => number % divisor === 0)
    .sort((a, b) => a - b);
  answer == '' && answer.push(-1);
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.
arr = [5, 9, 7, 10];
divisor = 5;

console.log(solution(arr, divisor));
