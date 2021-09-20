// 소수찾기
// 흩어진 종이로 만들수 있는 소수의 개수를 구해야한다

function solution(numbers) {
  const result = [];

  const recurNum = (array, start) => {
    if (start.length > 0) {
      if (!result.includes(+start)) {
        result.push(+start);
      }
    }
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        let temp = array.slice(0);
        temp.splice(i, 1);
        recurNum(temp, start + array[i]);
      }
    }
  };
  recurNum(numbers.split(''), '');

  for (let i = 0; i < result.length; i++) {
    if (result[i] < 2) {
      result[i] = null;
    } else {
      for (let j = 2; j <= Math.floor(result[i] ** 0.5); j++) {
        result[i] % j === 0 && (result[i] = null);
      }
    }
  }

  return result.filter(x => x).length;
}

// 아래코드는 테스트를 위한 코드입니다.
const numbers = '110'; // => 숫자 (1, 1, 0)을 가지고 소수를 만들어야 한다
// return 2 ([11, 101])

console.log(solution(numbers));
