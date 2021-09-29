캐쉬 = int(input())
count = 0

while 캐쉬 > 0:
    if(캐쉬 >= 500):
        count += 캐쉬 // 500
        캐쉬 = 캐쉬 - 500 * (캐쉬 // 500)
    elif (캐쉬 >= 100):
        count += 캐쉬 // 100
        캐쉬 = 캐쉬 - 100 * (캐쉬 // 100)
    elif(캐쉬 >= 50):
        count += 캐쉬 // 50
        캐쉬 = 캐쉬 - 50 * (캐쉬 // 50)
    else:
        count += (캐쉬 // 10)
        캐쉬 = 0

print(count)