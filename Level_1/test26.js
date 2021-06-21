// 음양 더하기
// signs[i]가 참이면 absolutes[i]의 실제 정수가 양수,
// 그렇지 않으면 음수임을 의미

const solution = (absolutes, signs) =>
  absolutes
    .map((x, i) => (signs[i] === false ? `-${x}` / 1 : x))
    .reduce((a, b) => a + b);

// 아래코드는 테스트를 위한 코드입니다.
const absolutes = [4, 7, 12];
const signs = [true, false, true];
// return 9

console.log(solution(absolutes, signs));
