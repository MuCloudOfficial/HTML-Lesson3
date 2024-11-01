function animation_HeaderInfo(){
    let ele = document.getElementsByClassName("header-page")
    for (let i = 0; i < ele.length; i++) {
        ele[i].animate([
            {opacity:0, transform:'translateX(-30px)'},
            {opacity:1, transform:'translateX(0px)'},
        ], {
            duration: 500, easing: "ease-in",
        }).play()
    }
}

animation_HeaderInfo()