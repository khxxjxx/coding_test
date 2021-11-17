// 키패드 누르기
// 1, 4, 7을 입력할 때는 왼손 엄지를 이용하고 3, 6, 9를 입력할 때는 오른손 엄지를 이용한다
// 가운데 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용
// 만약 두 엄지손가락의 거리가 같다면 주어진 'hand'의 손가락을 이용한다
// 사용한 손을 'L'과 'R'로 나타내라

function solution(numbers, hand) {
  hand === 'right' ? (hand = 'R') : (hand = 'L');
  let answer = '';
  let [L, R] = ['*', '#'];
  const key = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  for (let number of numbers) {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      L = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      R = number;
    } else {
      let num = number;
      const handIdx = [];

      for (let i = 0; i < key.length; i++) {
        if (key[i].includes(num)) {
          num = i;
          break;
        }
      }

      for (let h of [L, R]) {
        for (let i = 0; i < key.length; i++) {
          if (key[i].indexOf(h) !== -1) {
            handIdx.push(Math.abs(num - i) + Math.abs(1 - key[i].indexOf(h)));
          } else {
            continue;
          }
        }
      }

      if (handIdx[0] === handIdx[1]) {
        answer += hand;
        hand === 'R' ? (R = number) : (L = number);
      } else if (handIdx.indexOf(Math.min(...handIdx)) === 0) {
        answer += 'L';
        L = number;
      } else {
        answer += 'R';
        R = number;
      }
    }
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';
// return "LRLLLRLLRRL"

console.log(solution(numbers, hand));
