function solution(arr1, arr2) {
  let answer = [],
    answer2 = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      answer.push(arr1[i][j] + arr2[i][j]);
    }
    answer2.push(answer);
    answer = [];
  }
  return answer2;
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];
// return 	[[4,6],[7,9]]

console.log(solution(arr1, arr2));
