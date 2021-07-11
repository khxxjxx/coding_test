// 와이어 자르기
// 하나로 연결되어있는 송신탑의 와이어를 한군데 잘라 두개로 만들것이다
// 이때 두개로 나눠진 송신탑의 개수는 최대한 비슷한 비율로 자른다
// 나눠진 송신탑 수의 차를 절대값으로 return 한다

function solution(n, wires) {
  let result = [];

  for (let i = 0; i < n - 1; i++) {
    let wires2 = [...wires];
    wires2.splice(i, 1);

    // flag 방문한곳 체킹, 인접리스트 초기화
    let lists = [];
    let flag = [];
    for (let i = 0; i <= n; i++) {
      flag.push(false);
      lists.push([]);
    }

    for (w of wires2) {
      lists[w[0]].push(w[1]);
      lists[w[1]].push(w[0]);
    }

    let stack = lists[1];
    flag[1] = true;

    if (stack == '') {
      result.push(n - 2);
      // continue;
    }

    while (stack != '') {
      let visit = stack.pop();

      if (flag[visit] === false) {
        flag[visit] = true;
        stack.push(...lists[visit]);
      }
    }

    let group1 = flag.filter(x => x === true).length;
    let group2 = flag.filter(x => x === false).length - 1;

    result.push(Math.abs(group1 - group2));
  }

  return Math.min(...result);
}

// 아래코드는 테스트를 위한 코드입니다.
const n = 8;
const wires = [
  [1, 3],
  [1, 2],
  [1, 8],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

console.log(solution(n, wires));
