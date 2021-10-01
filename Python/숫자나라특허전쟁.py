# 3의 배수와 5의 배수가 특허가 걸려있어 사용할 수 없다
# 이때 input으로 숫자 N이 들어올때 1부터 N 직전의 수까지 특허를 피해 사용할 수 있는 숫자들의 합을 수하라

list = []

for i in range(1, int(input())):
    if(i % 3 == 0 or i % 5 == 0):
        list.append(i)

print(sum(list))