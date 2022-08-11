function solution(p) {
    let start_n = 0
    let finish_n = 0
    let u = []
    arr = p.split("")
    arr.map((ele)=>{
        if(start_n===finish_n & start_n!=0){
            return
        }
        if(ele ==="("){
            start_n += 1
            u.push(ele)
        }else{
            finish_n += 1
            u.push(ele)
        }
    })
    let olbaren = false;
    ele.map((e)=>{

    })
    let answer=  u
    return answer;
}

console.log(solution("()))((()"))