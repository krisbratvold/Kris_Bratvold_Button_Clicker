function message(){
    alert("Whats up!");
    document.getElementById("1st").style.backgroundColor = "red";
}
function message2(){
    alert("This is a good button.");
    document.getElementById("2nd").style.color = "pink";
}
function message3(){
    alert("This button is OK.");
    document.getElementById("3rd").style.borderRadius = "0%";
}
function message4(){
    alert("This is the best button.");
    document.getElementById("4th").style.backgroundColor = "red";
    document.getElementById("4th").style.border = "black solid 5px";
    document.getElementById("4th").style.borderRadius = "0%";
}
var count=0;
function message5(){
    count++;
    console.log(count);
}
window.onclick = backgroundchange;
function backgroundchange(){
    document.getElementsByTagName("Body")[0]
        .style.backgroundColor = "green";
}