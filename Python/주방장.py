# 첫째줄에 총 주문수와 근무시간이 나오고 둘째줄에 주문별 걸리는 시간이 input으로 들어온다
# 근무시간이 끝나기전까지 몇개의 주문을 완료하는지를 리턴

a, b = [list(map(int, input().split())) for _ in range(2)]

count = 0

for i in range(a[0]):
    if(a[1] >= b[i]):
        a[1] -= b[i]
        count += 1
    else:
        break
print(count)