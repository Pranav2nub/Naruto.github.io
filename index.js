var clicks = 1;
function starOpen() {
    if ((clicks % 2) != 0) {
        document.querySelector('.cart-items-container').style.transform = "scaleY(1)";
        clicks++
    }
    else {
        document.querySelector('.cart-items-container').style.transform = "scaleY(0)";
        clicks++
    }
}
var sclicks = 1
function searchOpen() {
    if ((sclicks % 2) != 0) {
        document.querySelector('.search-form').style.transform = "scaleY(1)";
        sclicks++
    }
    else {
        document.querySelector('.search-form').style.transform = "scaleY(0)";
        sclicks++
    }
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}
function additem1() {
    document.querySelector('#item1').style.transform = "scale(1)";
}

function cross1() {
    document.querySelector('#item1').style.transform = "scaleY(0)";
}
function cross2() {
    document.querySelector('#item2').style.transform = "scaleY(0)";
}
function cross3() {
    document.querySelector('#item3').style.transform = "scaleY(0)";
}
function cross4() {
    document.querySelector('#item4').style.transform = "scaleY(0)";
}
function cross4() {
    document.querySelector('#item5').style.transform = "scaleY(0)";
}
function cross4() {
    document.querySelector('#item6').style.transform = "scaleY(0)";
}
var likeCount1=0;
var likeCount2=0;
var likeCount3=0;
function like1(){
    likeCount1++;
    document.querySelector('.like1').innerHTML=likeCount1;
}
function like2(){
    likeCount2++;
    document.querySelector('.like2').innerHTML=likeCount2;
}
function like3(){
    likeCount3++;
    document.querySelector('.like3').innerHTML=likeCount3;
}