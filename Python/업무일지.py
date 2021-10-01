a = [list(map(int, input().split())) for _ in range(2)]

list = []

for i in range(a[0][0]):
    b = a[1][i] * (i+1) - sum(list)
    list.append(b)
    print(b, end=' ')