// 모의고사
// 문제를 가장 많이 맞춘 학생을 반환
// 동점자가 있을 경우 오름차순으로 정렬

function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5], // 1번 수포자가 찍는방식
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자가 찍는방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자가 찍는방식
  ];
  let answer = [],
    cnt = [0, 0, 0];

  students.map((num, idx) => {
    for (let i = 0; i < answers.length; i++) {
      answers[i] == num[i % num.length] && (cnt[idx] += 1);
    }
  });
  cnt.map((x, i) => Math.max(...cnt) === x && answer.push(i + 1));

  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const answers = [2, 2, 3, 3, 5, 4]; // 정답

console.log(solution(answers));
