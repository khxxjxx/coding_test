// 가계부
// 돈이 입금되면 통장에 차례로 찍히고 돈이 출금되면 마지막 입금된 금액에서 돈이 차감된다
// 만약 출금액이 마지막 입금액보다 클경우 최신입금액에서 차례로 돈이 차감되고
// 출금액은 통장에 입금된 총액보다 클 수 없다

function solution(deposit) {
  let answer = [];

  for (let i = 0; i < deposit.length; i++) {
    if (deposit[i] > 0) {
      answer.push(deposit[i]); // 금액이 0보다 클경우 입금된 것이므로 그냥 push해준다
    } else {
      if (answer[answer.length - 1] > Math.abs(deposit[i])) {
        // 마지막 입금액보다 출금액이 작을경우 마지막 입금액에서 출금액을 차감해준다
        answer[answer.length - 1] += deposit[i];
      } else if (answer[answer.length - 1] === Math.abs(deposit[i])) {
        // 마지막 입금액이랑 출금액이 같을경우 마지막 입금내역을 지워준다
        answer.pop();
      } else if (answer[answer.length - 1] < Math.abs(deposit[i])) {
        // 마지막 입금액보다 출금액이 더 클경우 출금액이 마지막 입금액보다 작아질때까지 다시 루프를 돈다
        while (answer[answer.length - 1] < Math.abs(deposit[i])) {
          // 출금액에서 마지막 입금액을 더해주고 마지막 입금내역을 지워준다
          deposit[i] += answer[answer.length - 1];
          answer.pop();
        }
        answer[answer.length - 1] += deposit[i];
        answer[answer.length - 1] === 0 && answer.pop();
      }
    }
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
let deposit = [1000, 1000, 5000, -6000];
// return [1000]

console.log(solution(deposit));
