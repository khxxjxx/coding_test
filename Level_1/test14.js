/*
// 포컷몬
nums = N마리 폰켓몬의 종류 번호가 담긴 배열
N마리의 포켓몬중 N/2마리를 가져갈 수 있다
N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 return
*/

function solution(nums) {
  const take = nums.length / 2;
  const choice = [...new Set(nums)].length;

  if (take > choice) {
    return choice;
  } else {
    return take;
  }
}

// 아래코드는 테스트를 위한 코드입니다.
const nums = [3, 3, 3, 2, 2, 4];

console.log(solution(nums));
