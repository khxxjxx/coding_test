// 소수찾기
// 1부터 입력받은 숫자(n) 사이에 있는 소수의 개수 반환

/*
// 시간초과
function solution(n) {
  const root = Math.floor(n ** 0.5);
  const arr = [];

  for (let i = 2; i < n + 1; i++) {
    arr.push(i);
  }

  for (let j = 2; j < root + 1; j++) {
    let arr2 = [];

    arr2 = arr.filter(x => x % j === 0);
    arr2.map((value, idx) => {
      if (idx !== 0) {
        arr.splice(arr.indexOf(value), 1);
      }
    });
  }
  return arr.length;
}
*/

/*
// 시간초과2
function solution(n) {
  const root = Math.floor(n ** 0.5);
  const arr = [];
  let arr2 = [];

  for (let i = 2; i < n + 1; i++) {
    arr.push(i);
  }

  for (let j = 2; j < root + 1; j++) {
    arr2.push(+arr.slice(0, 1));
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] % j === 0) {
        arr.splice(arr.indexOf(arr[k]), 1);
      }
    }
  }
  return [...new Set(arr2.concat(arr))].length;
}
*/

// 에라토스테네스의 체 참조
function solution(n) {
  const root = Math.floor(n ** 0.5);
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(true);
  }

  for (let j = 2; j < root + 1; j++) {
    if (arr[j - 1] === true) {
      for (let k = j + j; k < n + 1; k += j) {
        arr[k - 1] = false;
      }
    }
  }
  return arr.filter(x => x === true).length - 1;
}

// 아래코드는 테스트를 위한 코드입니다.
const n = 10; // 2, 3, 5, 7, 11, 13
// return 6

console.log(solution(n));
