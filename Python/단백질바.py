# 단백질큐브는 250짜리, 40짜리, 10짜리  총 3개로 구성되어있을때
# 손님이 원하는 단백질바를 만들기위해 큐브를 최소로 사용하여 구성하고 만들수 없을때는  -1을 리턴한다

input = int(input())

output = [0, 0, 0]

def 단백질바(input):
    while input > 0:
        if(input >= 250):
            input -= 250
            output[2] += 1
        elif(input >= 40):
            input -= 40
            output[1] += 1
        elif(input >= 10):
            input -= 10
            output[0] += 1
        else:
            return -1
    return ' '.join(str(i) for i in output)
    
print(단백질바(input))