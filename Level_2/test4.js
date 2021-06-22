// 프린터
// 인쇄 작업의 중요도(priorities)는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻이다
// location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며
// 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려준다
// 중요도가 높은 순서대로 프린터 되는데 이때 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return

function solution(priorities, location) {
  let stack = [];

  while (location !== -1) {
    if (priorities[0] !== Math.max(...priorities)) {
      priorities.push(priorities.shift());
      location === 0 ? (location = priorities.length - 1) : location--;
    } else {
      stack.push(priorities.shift());
      location--;
    }
  }
  return stack.length;
}

/*
// 첫번째 풀이
function solution(priorities, location) {
  let order = [];
  let stack = [];

  priorities.map((x, i) => {
    order.push({
      idx: i,
      data: x,
    });
  });

  while (priorities != '') {
    if (priorities[0] !== Math.max(...priorities)) {
      priorities.push(priorities.shift());
      order.push(order.shift());
    } else {
      priorities.splice(order.idx, 1);
      stack.push(order.shift());
    }
  }
  return stack.findIndex(x => x.idx === location) + 1;
}
*/

// 아래코드는 테스트를 위한 코드입니다.
const priorities = [1, 1, 9, 1, 1, 1];
let l = 0;
// return 5

console.log(solution(priorities, l));
