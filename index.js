document.querySelector("#regis-ter").addEventListener("click",function(){
    var element=document.querySelector(".box2");
    // console.log(element);
    element.classList.add("reg");
    document.querySelector(".box1").classList.add("big");
    document.querySelector(".login").classList.add("login-rotate");
    document.querySelector(".registration").classList.add("reg-rotate");
});

document.querySelector("#log-in").addEventListener("click",function(){
    var element=document.querySelector(".box2");
    // console.log(element);
    element.classList.remove("reg");
    document.querySelector(".box1").classList.remove("big");
    document.querySelector(".registration").classList.remove("reg-rotate");
    setTimeout(function(){

        document.querySelector(".login").classList.remove("login-rotate");
    },125);
    // console.log(document.querySelector(".login").classList);
});

document.querySelector("#login").addEventListener("click",function(){
    // if(!(document.querySelector("#login").classList.contains("full"))){
    //     document.querySelector(".box2").classList.remove("reg");
    //     document.querySelector(".box1").classList.remove("big");
    // }
    var element=document.querySelector(".box1");
    // console.log(element);
    element.classList.add("full");
    // document.querySelector(".box1").classList.remove("big");
});

document.querySelector(".cls").addEventListener("click",function(){
    var element=document.querySelector(".box1");
    // console.log(element);
    element.classList.remove("full");
    // document.querySelector(".box2").classList.remove("reg");
});