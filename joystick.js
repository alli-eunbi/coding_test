function solution(name) {
   let name_arr = name.split("");
   let first_arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
   let second_arr = first_arr.slice().reverse();
   let first = Array.from({ length: name_arr.length }, (v) => "a");
   let moving_count = 0
   
   name_arr.map((ele, i)=>{
    let f = first_arr.indexOf(ele)
    let s = second_arr.indexOf(ele) + 1
    console.log(f, s)

    if(ele==="A"){
        moving_count +=1
        return
    }

    if(f>=s){
        moving_count += s
    }else{
        moving_count += f
    }
    if(i>0){
        moving_count+=1
    }

    console.log(moving_count)
   })
   return moving_count

}

console.log(solution("JEROEN"));
console.log(solution("JAN"));