function solution(html) {
    if(html.search("<")===-1){
        return false
    }
    html = html.replace(/(\s*)/g, "")
    arr = html.split("")

    let open=0
    let close = 0
    let slash =0

    arr2 = html.split(">")
    de = []
    arr2.map((a, i)=>{
        if(a!==""){
            if(a.indexOf("</") !== -1){
                a = a.replace("</", "")
            }else if(a.indexOf("<") !== -1){
                a = a.replace("<","")
            }

            if(de[de.length-1]===a){
                index = de.indexOf(a)
                de.splice(index,1)
            }else{
                de.push(a)
            }
        }
    })

    arr.map((a)=>{
        if(a==="<"){
            open = open+1
        }
        if(a===">"){
            close = close+1
        }
        if(a==="/"){
            slash = slash+1
        }
    })
    
    
    if(open===close && close/2===slash && de.length === 0){
        return true
    }else{
        return false
    }
}

console.log(solution(" <div></div>"))
console.log(solution("<div><button></div></button>"))