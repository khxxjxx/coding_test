// 카펫
// 카펫에서 갈색 격자의 수 brown 노란색 격자의 수 yellow
// yellow의 색상을 brown이 감싸고 있을때 카펫의 가로, 세로 길이를 return 하시오

const solution = (b, y, sum = b + y) => {
  let i = 3;
  while (true) {
    if (sum % i === 0 && sum / i + i - 2 === b / 2) {
      return [sum / i, i];
    }
    i++;
  }
};

// 아래코드는 테스트를 위한 코드입니다.
const brown = 24;
const yellow = 24;
// return [8, 6]

console.log(solution(brown, yellow));
