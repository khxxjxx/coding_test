// 시저암호
// 문자열 s를 n만큼 밀어서 나온 문자로 변환
// z를 1번 밀면 a이고, 공백은 아무리 밀어도 공백이다
// n은 1이상 25이하인 자연수이다

function solution(s, n) {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const a = 'abcdefghijklmnopqrstuvwxyz';
  s = s.split('');

  return s
    .map(x => {
      if (A.includes(x)) {
        return A.indexOf(x) + n >= 26
          ? A[A.indexOf(x) + n - 26]
          : A[A.indexOf(x) + n];
      } else if (a.includes(x)) {
        return a.indexOf(x) + n >= 26
          ? a[a.indexOf(x) + n - 26]
          : a[a.indexOf(x) + n];
      } else {
        return ' ';
      }
    })
    .join('');
}

// 아래코드는 테스트를 위한 코드입니다.
const s = 'Z c';
const n = 1;
// return A d

console.log(solution(s, n));
