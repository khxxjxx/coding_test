// 튜플

function solution(s) {
  let answer = [];
  s = s
    .replace(/,(?={)/g, '/')
    .replace(/{|}|/g, '')
    .split('/')
    .sort((a, b) => a.length - b.length)
    .map(s => answer.push(+s.split(',').filter(x => !answer.includes(+x))));
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const s = '{{1,2,3},{2,1},{1,2,4,3},{2}}';
// return [2,1,3,4]

console.log(solution(s));
