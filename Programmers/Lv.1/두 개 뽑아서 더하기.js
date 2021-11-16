// 두 개 뽑아서 더하기
// 서로다른 인덱스를 두개를 뽑아서 더했을때 나올 수 있는 모든 수 구하기

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

// 아래코드는 테스트를 위한 코드입니다.
const numbers = [2, 1, 3, 4, 1];
// return [2,3,4,5,6,7]

console.log(solution(numbers));
