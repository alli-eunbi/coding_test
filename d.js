function solution(amounts) {

    if(!amounts[0]||amounts[0]==="0원"){
        return 0
    }
   amounts = amounts.map((a)=>{
        a = a.replace("원", "").replace(/\,/g, "")
        return a= parseInt(a)
    })

    let d = amounts.reduce((a,b)=>{
        return a+b
    })

    return d
}

console.log(solution(["1,234원", "1,234,567원"]))
