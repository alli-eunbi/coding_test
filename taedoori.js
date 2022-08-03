function moving_hangs(hang, query, rows){
    let moved_hang = hang.map(a=>[...a])
    for(x=query[0]-1; x<query[2]-1; x++){
        y=query[1]-1
        moved_hang[x][y] = hang[x+1][y]
    }
    for(x=query[0]; x<query[2]; x++){
        y=query[3]-1
        moved_hang[x][y] = hang[x-1][y]
    }
    for(y=query[1]; y<query[3]; y++){
        x=query[0]-1
        moved_hang[x][y] = hang[x][y-1]
    }
    for(y=query[1]-1; y<query[3]-1; y++){
        x=query[2]-1
        moved_hang[x][y] = hang[x][y+1]
    }
    return moved_hang
}

function solution(rows, columns, queries) {
    let hang = []
    let n=1
    for(let x=1; x<=rows; x++){
        let x_yul = []
        for(let y=1; y<=columns; y++){
            x_yul.push(n)
            n=n+1
        }
        hang.push(x_yul)
    }

    let answer = [];
    queries.map((query)=>{
        let numbers = [];
        for(let x=query[0]-1; x<query[2]; x++){
            if(x===query[0]-1 || x===query[2]-1){
                for(let y=query[1]-1; y<query[3]; y++){
                    let n = hang[x][y]
                    numbers.push(n)
                }
            }else{
                let y1 = query[1]-1
                let y2 = query[3]-1

                let n = hang[x][y1]
                let n2 = hang[x][y2]

                numbers.push(n)
                numbers.push(n2)
            }}
            hang = moving_hangs(hang, query, rows)
            numbers.sort((a, b)=>{return a-b})
            answer.push(numbers[0])
        })
    return answer
}

console.log(solution(6, 6, 	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]))