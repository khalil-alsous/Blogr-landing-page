let li = document.getElementsByClassName("click");
let dropdown = document.getElementsByClassName("dropDown");
let btn_burger = document.querySelector(".btn-burger");
let list = document.querySelector(".cont-nav-butt");
let span = document.querySelector(".span");

// Drop Down
li[0].addEventListener("click",toggle_dropList1) ;
li[1].addEventListener("click",toggle_dropList2) ;
li[2].addEventListener("click",toggle_dropList3) ;
function toggle_dropList1(){
    dropdown[0].classList.toggle("dropList");
}
function toggle_dropList2(){
    dropdown[1].classList.toggle("dropList");
}
function toggle_dropList3(){
    dropdown[2].classList.toggle("dropList");
}

// Open List On Mobile
btn_burger.addEventListener("click",openList);
var showList = false;
function openList(){
    if(!showList){
        list.classList.add("openList");
        span.classList.add("openList");    
        showList = true;
    } else{
        list.classList.remove("openList");
        span.classList.remove("openList");
        showList = false;
    }
} 