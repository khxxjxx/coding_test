// 다리를 지나는 트럭
// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 한다
// 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며
// 다리는 weight 이하까지의 무게를 견딜 수 있습니다

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let cnt = 0;

  while (truck_weights != '') {
    bridge.shift();
    let sum = bridge.reduce((a, b) => a + b);

    if ((sum += truck_weights[0]) <= weight && bridge.length < bridge_length) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }

    cnt++;
  }
  return (cnt += bridge_length);
}

// 아래코드는 테스트를 위한 코드입니다.
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
// return 8

console.log(solution(bridge_length, weight, truck_weights));
