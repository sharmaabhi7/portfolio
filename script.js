var typed = new Typed(".text",{
    strings:["3D Modeling","Video Editing","Full-Stack Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:500,
    loop:true
});
var click = 0;
function abhi(){
    if(click===0){
        tog.className = "navbar active"
        click = 1;
    }
    else {
        tog.className = "navbar"
        click = 0;
    }
}
