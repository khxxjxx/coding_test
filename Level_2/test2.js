// 최솟값 만들기
// 길이가 같은 배열 a와 b에서 각각 한개의 숫자를 뽑아 곱하는 과정을 배열의 길이만큼 반복한다
// 곱한 값을 누적하여 더했을때 최종값이 제일 작은 최솟값을 구해야한다
// 이미 뽑은 숫자는 다시 뽑을 수 없다

function solution(a, b) {
  let cnt = 0;
  a.sort((a, b) => a - b), b.sort((a, b) => b - a);
  // 젤 큰수는 젤 작은수와 곱해져야 최솟값이 되므로 a배열은 오름차순, b배열은 내림차순으로 설정

  for (let i = 0; i < a.length; i++) {
    cnt += a[i] * b[i];
  }
  return cnt;
}

// 아래코드는 테스트를 위한 코드입니다.
const a = [1, 4, 2];
const b = [5, 4, 4];
// return 29

console.log(solution(a, b));
