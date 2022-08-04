function solution(header) {
    //TODO: 구현하세요.
    let answers = []
    header_arr = header.split("\n")
    console.log(header_arr)
    let ids = []
    header_arr.map((ele)=>{
        let answer = {};
        if(!ele.search("Set-Cookie")){
            ids = ele.split("=")
            console.log(ids)
            ids.map((e, i)=>{
                if(i===0){
                    let key = e.split(": ")[1]
                    answer[key] = ""
                }
                if(i>0){
                    answer[key] = answer[key]+"="+ids[i]
                }
            })
            answers.push(answer)
        }
    })
    return answers
}

console.log(solution("ddd\nSet-Cookie: JSESSIONID=JVhlJTPZMTgCeLZkGqS33YAZHhc; path=/\nSet-Cookie: SSCSID=PW51&&JVhlJTPZMTgCeLZkGqS33YAZHhc; domain=.toss.im; path=/"))