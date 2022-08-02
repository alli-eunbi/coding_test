function solution(str1, str2) {
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()

    let str1_arr = str1.split("")
    let str2_arr = str2.split("")

    if(str1_arr.length +str2_arr.length === 0){
        return 65536
    }


    str1_jakad = []
    str2_jakad = []

    for(i=0; i<str1_arr.length-1; i++){
        if(str1_arr[i].match(/^[A-Z]/) && str1_arr[i+1].match(/^[A-Z]/)){
            let element = str1_arr[i]+str1_arr[i+1]
            str1_jakad.push(element)
        }
    }
    for(i=0; i<str2_arr.length-1; i++){
        if(str2_arr[i].match(/^[A-Z]/) && str2_arr[i+1].match(/^[A-Z]/)){
            let element = str2_arr[i]+str2_arr[i+1]
            str2_jakad.push(element)
        }
    }
    let hap = str1_jakad.length+str2_jakad.length

    //교집합
    jakad=[]
    if(str2_jakad.length>=str1_jakad.length){
        str1_jakad.map((ele, i)=>{
            if(str2_jakad.includes(ele)){
                jakad.push(ele)
                let index = str2_jakad.indexOf(ele)
                str2_jakad.splice(index, 1)
            }
        })
    }else{
        str2_jakad.map((ele, i)=>{
            if(str1_jakad.includes(ele)){
                jakad.push(ele)
                let index = str1_jakad.indexOf(ele)
                str1_jakad.splice(index, 1)
            }
        })
    }

    if(jakad.length===0){
        return 65536
    }

    let answer = jakad.length /(hap - jakad.length) * 65536
    return Math.floor(answer)
}


console.log(solution("sd", "ee"))