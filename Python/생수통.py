# input으로 각기 가격이 다른 병 3종류와 병뚜껑 2종류가 들어올때 가장 싸게 페트병을 조립하고 10원을 추가한 가격을 리턴

a = [int(input()) for _ in range(5)]

print(min(a[:3]) + min(a[3:]) + 10)