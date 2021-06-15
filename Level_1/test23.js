// 크레인 인형뽑기
// board에는 0 ~ 100의 정수가 들어있고 0은 빈칸을 뜻한다
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타낸다
// moves 위치에서 순서대로 인형을 집어 올려 바구니에 담고 같은인형이 연속2개면 사라진다

function solution(board, moves) {
  let choose = [];
  let cnt = 0;

  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] !== 0) {
        choose.push(board[i][moves[j] - 1]);
        board[i][moves[j] - 1] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < choose.length; ++i) {
    if (choose[i - 1] === choose[i]) {
      choose.splice(i - 1, 2);
      cnt += 2;
      i = 0;
    }
  }
  return cnt;
}

// 아래코드는 테스트를 위한 코드입니다.
const board = [
  // 게임 화면의 격자의 상태가 담긴 2차원 배열
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4]; // 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열
// return 4  // 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수

console.log(solution(board, moves));
