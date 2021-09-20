// N개의 최소공배수
// n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환

function solution(arr) {
  let result = arr[arr.length - 1];
  let loop = true;

  while (loop) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (result % arr[i] === 0) {
        loop = false;
      } else {
        loop = true;
        result += arr[arr.length - 1];
        break;
      }
    }
  }
  return result;
}

const arr = [2, 6, 8, 14];
// return 168

console.log(solution(arr));
