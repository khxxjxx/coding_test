// 서울에서 김서방 찾기

function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

// 아래 코드는 테스트를 위한 코드입니다.
const seoul = ['Jane', 'Kim']; // "김서방은 1에 있다"

console.log(solution(seoul));
