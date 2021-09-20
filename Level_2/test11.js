// 괄호 회전하기
// 문자열 s를 s길이만큼 회전했을때 올바른 괄호가 되는 경우의 개수를 구해라

function solution(s) {
  s = s.split('');
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    for (let j = 0; j < s.length; j++) {
      if (s[j] === '(' || s[j] === '[' || s[j] === '{') {
        stack.push(s[j]);
      } else if (
        stack.length === 0 &&
        (s[i] === ')' || s[i] === ']' || s[i] === '}')
      ) {
        count++;
        break;
      } else if (
        (stack[stack.length - 1] === '(' && s[j] === ')') ||
        (stack[stack.length - 1] === '[' && s[j] === ']') ||
        (stack[stack.length - 1] === '{' && s[j] === '}')
      ) {
        stack.pop();
      }
    }

    stack.length !== 0 && count++;
    s.push(s.shift());
  }
  return s.length - count;
}

const s = '[](){}'; // return 3

console.log(solution(s));
