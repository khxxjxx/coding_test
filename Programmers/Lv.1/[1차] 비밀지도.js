// [1차] 비밀지도
// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 “공백”(“ “) 또는 “벽”(“#”) 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 “지도 1”과 “지도 2”라고 하자
// 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// “지도 1”과 “지도 2”는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
// 원래의 비밀지도를 해독하여 "#", 공백으로 구성된 문자열 배열로 출력하라.

function solution(n, arr1, arr2) {
  let answer = [],
    answer2 = [],
    answer3 = [];
  let arrs = [arr1, arr2];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < n; k++) {
        answer.unshift(arrs[j][i] % 2);
        arrs[j][i] = Math.floor(arrs[j][i] / 2);
      }
      answer2.push(answer);
      answer = [];
    }
    for (let q = 0; q < n; q++) {
      if (answer2[0][q] === 0 && answer2[1][q] === 0) {
        answer2[0][q] = ' ';
      } else {
        answer2[0][q] = '#';
      }
    }
    answer3.push(answer2[0].join(''));
    answer2 = [];
  }
  return answer3;
}

// 아래코드는 테스트를 위한 코드입니다.
let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
// return ['#####', '# # #', '### #', '#  ##', ' #####']

console.log(solution(n, arr1, arr2));
