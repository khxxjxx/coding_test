// 오픈채팅방
// 채팅방에 누군가 들어오거나 나가면 닉네임과 메시지가 출력된다
// 닉네임을 변경하거나 나갓다가 새로운 닉네임으로 들어올경우 그 전 메시지의 닉네임도 전부 변경된다

function solution(records) {
  let answer = [];
  let users = {};

  for (let record of records) {
    const a = record.split(' ');
    a[0] !== 'Leave' && (users[a[1]] = a[2]);
  }

  for (let record of records) {
    const a = record.split(' ');
    if (a[0] === 'Enter') {
      answer.push(`${users[a[1]]}님이 들어왔습니다.`);
    } else if (a[0] === 'Leave') {
      answer.push(`${users[a[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

// 아래코드는 테스트를 위한 코드입니다.
const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];
// return ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

console.log(solution(record));
