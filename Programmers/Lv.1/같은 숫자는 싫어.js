// 같은 숫자는 싫어
// 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const arr = [1, 1, 3, 3, 0, 1, 1]; // [1, 3, 0, 1]

console.log(solution(arr));
