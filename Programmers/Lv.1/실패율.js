// 실패율
// 실패율이 높은 스테이지부터 내림차순

function solution(N, stages) {
  let answer = [];
  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    answer.push({
      idx: i,
      obj: stages.filter(x => x === i).length / (stages.length - cnt),
    });
    cnt += stages.filter(x => x === i).length;
  }

  return answer.sort((a, b) => b.obj - a.obj).map(x => x.idx);
}

// 아래코드는 테스트를 위한 코드입니다.
const N = 5; // 전체스테이지 개수
const stages = [2, 1, 2, 6, 2, 4, 3, 3]; // 현재 도전 중인 스테이지의 번호
// return [3, 4, 2, 1, 5]

console.log(solution(N, stages));
