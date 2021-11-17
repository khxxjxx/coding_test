// 로또의 최고 순위와 최저 순위
// 0이라 표시되어있는 번호는 알아볼수 없는 번호이다
// 알아볼수 없는 번호가 맞았을때와 맞지 않았을때의 등수를 구한다

function solution(lottos, win_nums) {
  let answer = [];
  const rank = [6, 6, 5, 4, 3, 2, 1]; // 맞힌 개수 [0, 1, 2, 3, 4, 5, 6]

  const count = win_nums.filter(x => lottos.includes(x)).length; // 맞은 개수 구하기
  const zero = lottos.filter(x => x === 0).length; // 0의 개수 구하기

  answer.push(rank[count + zero], rank[count]); // [최고등수 , 최저등수]
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.
const lottos = [44, 1, 0, 0, 31, 25]; // 내번호
const win_nums = [31, 10, 45, 1, 6, 19]; // 당첨번호

console.log(solution(lottos, win_nums));
