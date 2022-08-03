function solution(s) {
    let arr = s.split("")
    console.log(arr)


    let num_dict = {}
    let num =""
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="{" || arr[i]==="}" || arr[i]===","){
            if(num!==""){
                num_dict[num] = num_dict[num] ? num_dict[num]+1 : 1
                num=""
            }
        }else{
            num = num + arr[i]
        }
    }
    console.log(num_dict);
    numbers = []
    for(let key in num_dict){
        numbers.push(num_dict[key])
    }
    
    numbers.sort((a,b)=>b-a)
    
    numbers = numbers.map((n)=>{
        for(let key in num_dict){
            if(num_dict[key]===n){
                return n=parseInt(key)
            }
        }
    })
    return numbers
}

console.log(solution("{{20,111},{111}}"))
