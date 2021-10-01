a = [list(map(int, input().split() )) for _ in range(2)]

print(sum(a[0]) if sum(a[0]) > sum(a[1]) else sum(a[1]))