// 체육복
// 여벌이 있어야만 체육복을 빌려줄수 있다
// 여벌이 있는 학생도 도난당할 수 있다 이경우 체육복을 빌려줄 수 없다
// 번호는 체격 순으로 바로 앞번호나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다

function solution(n, lost, reserve) {
  const lost2 = lost.filter(x => !reserve.includes(x));
  reserve = reserve.filter(x => !lost.includes(x));
  let answer = n - lost2.length;
  let count = 0;

  for (let i = 0; i < reserve.length; i++) {
    if (lost2.indexOf(reserve[i] - 1) !== -1) {
      lost2.splice(lost2.indexOf(reserve[i] - 1), 1);
      count++;
    } else if (lost2.indexOf(reserve[i] + 1) !== -1) {
      lost2.splice(lost2.indexOf(reserve[i] + 1), 1);
      count++;
    }
  }
  return answer + count;
}

// 아래 코드는 테스트를 위한 코드입니다.
const n = 5; // 전체 학생수
let lost = [2, 3, 4]; // 체육복을 도난당한 학생들의 번호
let reserve = [1, 2, 3]; // 여벌의 체육복을 가져온 학생들의 번호
// return 4

console.log(solution(n, lost, reserve));
