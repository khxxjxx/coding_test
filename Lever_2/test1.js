// 기능개발

function solution(progresses, speeds) {
  var answer = [];
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

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1]; // return [1,3,2]

console.log(solution(progresses, speeds));
