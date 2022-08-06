function solution(id) {
    console.log(id.length)
    if(id.length%2===0){
        arr =id.split("")
        index = arr.length
        if(index/2 %2 ===0){
            arr = arr.map((a)=>{
                for(i=index/2; index<index+index/2; idex++){
                    return a = "*"
                }
            })
        }

    }
    console.log(arr)
}
console.log(solution("k0r6k9"))
console.log(solution("wwww"))
console.log(solution("7do98"))

