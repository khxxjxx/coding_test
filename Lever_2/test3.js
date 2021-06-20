// 최댓값과 최솟값

let solution = s => `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;

// 아래코드는 테스트를 위한 코드입니다.
const s = '-1 -2 -3 -4';
// return "-4 -1"

console.log(solution(s));
