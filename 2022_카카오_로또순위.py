def solution(lottos, win_nums):

    i = 0
    zero_num = 0
    for lotto_num in lottos:
        if lotto_num != 0 : 
            for win_num in win_nums :
                if lotto_num == win_num:
                    i += 1
        else:
            zero_num+=1
    
    first = 7-(i+zero_num)
    last_award =7-i
    if zero_num ==6 or i==0:
        last_award=6

    answer = [first, last_award]
    print(answer)
    return answer

solution(	[0, 0, 0, 0, 0, 0],	[20, 9, 3, 45, 4, 35])