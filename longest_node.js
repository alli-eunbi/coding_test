// function find_node(answer, edge){
//     answer.map((a)=>{
//         edge.map((e, i)=>{
//             let d=[];
//             if(e.indexOf(a[a.length-1])===0){
//                 if(!a.includes(e[1])){
//                     d = [...a]
//                     d.push(e[1])
//                     answer.push(d)
//                     edge.slice(i)
//                 }
//             }
//         })
//     })
//     return answer
// }

// function solution(n, edge) {
//     let answer = [];

// // //n개만큼의 array가 나오지 않으면 반복하도록
//     for(i=1; i<n; i++){
//         console.log(answer, i)
//         answer = find_node(answer, edge)
//     }
//     return answer
// }

const solution = (n, edge) => {
    const graph = Array.from({ length: n }, () => [])
    edge.forEach(([a,b]) => {
        graph[a-1].push(b-1)
        graph[b-1].push(a-1)
    })
    console.log(graph)
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))