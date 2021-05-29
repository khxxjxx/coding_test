// 문자열 내 마음대로 정렬하기
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
// 인덱스 n의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return (a > b) - (a < b);
  });
  return strings;
}

// 아래 코드는 테스트를 위한 코드입니다.
let string = ['abce', 'abcd', 'cdx'];
let n = 2;

console.log(solution(string, n)); // ['abcd', 'abce', 'cdx']
