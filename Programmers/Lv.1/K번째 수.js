// K번째 수
// 배열의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.

function solution(array, commands) {
  let answer = [];
  for (let s = 0; s < commands.length; s++) {
    let i = commands[s][0] - 1;
    let j = commands[s][1];
    let k = commands[s][2] - 1;

    let result = array.slice(i, j);
    result.sort((a, b) => a - b);
    answer.push(result[k]);
  }
  return answer;
}

// 아래 코드는 테스트를 위한 코드입니다.
let array = ['1', '5', '2', '6', '3', '7', '4'];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
