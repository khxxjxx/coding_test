// 기능개발
// 배포는 하루에 한번만 할 수 있다
// 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고
// 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다

function solution(progresses, speeds) {
  let answer = [];
  let days = [];
  let cnt = 0;

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  while (days != '') {
    let a = +days.slice(cnt, cnt + 1);
    for (let k = 0; k < days.length; k++) {
      if (a === days[k] || a > days[k]) {
        cnt++;
      } else {
        answer.push(cnt);
        days.splice(0, cnt);
        cnt = 0;
        break;
      }
    }
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const progresses = [95, 90, 99, 99, 80, 99]; // 작업진도
const speeds = [1, 1, 1, 1, 1, 1]; // 작업속도
// [5일, 10일, 1일, 1일, 20일, 1일] 소요
// return [1,3,2]

console.log(solution(progresses, speeds));
