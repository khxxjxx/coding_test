# 배열에서 제일 작은 수를 제거하고 만약 빈배열일 경우 [-1]을 리턴한다

def solution(arr):
    arr.remove(min(arr))
    return arr if arr != [] else [-1]


arr = [4,3,2,1]
print(solution(arr))