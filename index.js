
let title = [
    "STARRY SKY",
    "SAKURA OCEAN",
    "VOID LAND",
]

let p = 1;

setInterval(function exchangeTitleInfo(){
    if(p === title.length){
        p = 0;
    }

    let ele = document.querySelector("#title-inner-text")
    ele.innerHTML = title[p];
    ele.animate([
        {opacity:0},
        {opacity:1}
    ], 300).play()
    if(p === 0){
        ele.style.color = "dodgerblue"
    }else if(p === 1){
        ele.style.color = "pink"
    }else if(p === 2){
        ele.style.color = "gray"
    }
    p++;

}, 5000)