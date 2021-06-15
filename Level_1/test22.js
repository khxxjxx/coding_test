function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
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
const answers = [2, 2, 3, 3, 5, 4];

console.log(solution(answers));

function solution2(answers) {
  const students = [
    '12345'.repeat(Math.ceil(answers.length / 5)).split(''),
    '21232425'.repeat(Math.ceil(answers.length / 8)).split(''),
    '3311224455'.repeat(Math.ceil(answers.length / 10)).split(''),
  ];
  let answer = [],
    result = [];
  let cnt = 0;

  students.map(x => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == x[i]) {
        cnt++;
      }
    }
    answer.push(cnt);
    cnt = 0;
  });

  for (let k = 0; k <= answer.length; k++) {
    if (Math.max(...answer) === answer[k]) {
      result.push(k + 1);
    }
  }
  return result;
}

console.log(solution2(answers));
