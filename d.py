# from collections import defaultdict
# # def solution(id_list, report, k):

# id_list = ["apeach", "muzi"]
# k = 1
# ban = ["muzi frodo", "muzi neo", "apeach muzi", "apeach neo", "muzi neo", "apeach muzi"]

# ban_list = list(set(ban))
# singoja_dict = defaultdict(list)
# dangsaja_dict = defaultdict(int)
# print(ban_list)

# declare = []
# for ban in ban_list:
#     singoja, dangsaja = ban.split(" ")

#     dangsaja_dict[dangsaja] +=1
#     singoja_dict[singoja].append(dangsaja)

# answer = []
# for id in id_list :
#     for reported in singoja_dict[id]:
#         if dangsaja_dict[reported] > k:
#             n =+ 1
#             answer.append(n)

# print(dangsaja_dict)
# print(answer)


# solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)

from collections import defaultdict
def solution(id_list, report, k):
        
    ban_list = list(set(report))
    singoja_dict = defaultdict(list)
    dangsaja_dict = defaultdict(int)


    for ban in ban_list:
        singoja, dangsaja = ban.split(" ")

        dangsaja_dict[dangsaja] +=1
        singoja_dict[singoja].append(dangsaja)


    answer = defaultdict(int)
    for id in id_list :
        answer[id] = 0
        for dangsaja in singoja_dict[id]:
            print(dangsaja)
            if dangsaja_dict[dangsaja] >= k:           
                answer[id] += 1
    return list(answer.values())

print(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2))