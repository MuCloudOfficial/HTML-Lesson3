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

let animate = [
        {opacity: 0, transform:'translateX(30px)'},
        {opacity: 1, transform:'translateX(0px)'},
    ]

function validateFeedback(){
    let fb = document.forms["fb"];
    let name = fb["name"];
    let email = fb["email"];
    let po = fb["po"];
    let problem = fb["problem"];
    let desc = fb["desc"];
    let fb_cb1 = fb["fb-cb1"];

    let checked = true;

    if(name.value == null || name.value === ""){
        name.style.borderColor="red";
        name.nextElementSibling.animate(animate, {duration: 300,direction: "alternate",easing: "ease-in-out"}).play();
        name.nextElementSibling.style.transform = 'translateX(0px)';
        name.nextElementSibling.style.opacity = '1';
        checked = false;
    }

    if(email.value == null || email.value === ""){
        email.style.borderColor="red";
        email.nextElementSibling.animate(animate, {duration: 300,direction: "alternate",easing: "ease-in-out"}).play();
        email.nextElementSibling.style.transform = 'translateX(0px)';
        email.nextElementSibling.style.opacity = '1';
        checked = false;
    }else{
        let atpos = email.value.indexOf("@");
        let dotpos = email.value.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.value.length){
            email.style.borderColor="red";
            email.nextElementSibling.innerHTML = "Invalid Email!";
            email.nextElementSibling.animate(animate, {duration: 300,direction: "alternate",easing: "ease-in-out"}).play();
            email.nextElementSibling.style.transform = 'translateX(0px)';
            email.nextElementSibling.style.opacity = '1';
            checked = false;
        }
    }

    if(problem.value == null || problem.value === ""){
        problem.style.borderColor="red";
        problem.nextElementSibling.animate(animate, {duration: 300,direction: "alternate",easing: "ease-in-out"}).play();
        problem.nextElementSibling.style.transform = 'translateX(0px)';
        problem.nextElementSibling.style.opacity = '1';
        checked = false;
    }

    if(checked){
        document.getElementById("fb-submit").innerHTML = "Submit Successfully! &check;"
        console.log([
            name.value, email.value, po.value, problem.value, desc.value, fb_cb1.value
        ])
    }
}