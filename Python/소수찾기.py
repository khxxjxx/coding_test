a = int(input())
b = [True] * a
c = 0

for i in range(2, a+1):
    if (b[i-1] == True):
        c += 1
        for j in range(i+i, a+1, i):
            b[j-1] = False

print(c)

# 시간오류

# a = int(input('시작숫자'))
# b = int(input('끝숫자'))
# d = 0

# for i in range (a, b+1):
#     c = 0
#     for j in range(2, i):
#         if i%j== 0:
#     if c == 0:
#         d += 1
# print("소수의 개수는 {}입니다." .format(d-1))