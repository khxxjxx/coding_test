// 문자열 다루기
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수

const solution = s => {
  if (s.length === 4 || s.length === 6) {
    if (s.indexOf('e') === -1 && +s) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// 아래코드는 테스트를 위한 코드입니다.
const s = '1e22';
// return false

console.log(solution(s));
