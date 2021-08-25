// 짝지어 제거하기

function solution(s) {
  let stack = [];

  if (s.length % 2 === 1) {
    return 0;
  } else {
    for (let i = 0; i < s.length; i++) {
      stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
    }
    return stack == '' ? 1 : 0;
  }
}

// 아래코드는 테스트를 위한 코드입니다.
const s = 'abba'; // -> 'bb' -> 'aa'

// return 1 => 문자열을 모두 제거할 수 있으면 1을 반환 없으면 0을 반환
console.log(solution(s));
