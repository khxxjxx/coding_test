list = []

for i in range(1, int(input())):
    if(i % 3 == 0 or i % 5 == 0):
        list.append(i)

print(sum(list))