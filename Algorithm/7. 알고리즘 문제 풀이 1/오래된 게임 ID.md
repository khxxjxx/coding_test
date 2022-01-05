## 오래된 게임 ID

### 문제 설명

- 비밀번호의 글자 수 L과 비밀번호에 포함될 가능성이 있는 수 C를 입력 받아 사전순으로 가능성있는 비밀번호들을 구하는 문제.<br>

### 자료 구조

- arr<br>

  - 타입 : 문자열 배열
  - 저장 데이터 : 비밀번호에 포함될 가능성이 있는 글자들의 오름차순 배열

- mo<br>
  - 타입 : 문자열 배열
  - 저장 데이터 : 모음

### 풀이 과정

```txt
1. 비밀번호에 포함될 가능성이 있는 글자들을 입력받은 후 사전순으로 정렬을 위해 sort처리해준다.

2. 비밀번호는 사전순으로 정렬되어있기 때문에 중복이 없으므로 중복없는 순열을 만들어 준다.

3. 비밀번호의 조건은 모음이 1개이상, 자음이 2개 이상이기 때문에 모음배열과 현재의 순열을 교집합, 차집합으로 비교하여 조건이 충족되면 출력해준다.(차집합을 따로 구하지 않고, 교집합만을 구한후, 교집합의 수에서 해당 순열의 글자수를 빼는 방식으로 모음이 아닌 글자의 수를 구할 수도 있다.)
```

### 코드 구현

사용 언어 : 파이썬

```py
from itertools import combinations

L, C = map(int, input().split())
# 풀이 과정 1
arr = sorted(input().split())
mo = ['a', 'e', 'i', 'o', 'u']

# 풀이 과정 2
for s in combinations(arr, L):
    # 풀이 과정 3
    if len(list(set(s) & set(mo))) >= 1 and len(list(set(s) - set(mo))) >= 2:
        print(''.join(s))
```

input

```
4 6
a t c i s w
```

output

```
acis
acit
aciw
acst
acsw
actw
aist
aisw
aitw
astw
cist
cisw
citw
istw
```

점수 : 100 / 100<br>
