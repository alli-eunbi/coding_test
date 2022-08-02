function solution(n) {

    let numbers ="";
    
    while(n>0){
        let rest;
        if(n%3 === 0){
            n = Math.floor(n/3 -1)
            rest = 4
        }else{
            rest = n%3
            n = Math.floor(n/3)
        }

        numbers = String(rest)+numbers
    }
    return numbers
  }

  console.log(solution(10))
