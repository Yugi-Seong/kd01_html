// 기본함수
function hello(){
    alert("Hello JS!!") ;
}
// 화살표 함수
const hello2 = () => {
    alert("Hello2 JS!!") ;
} 

// 매개변수 사용
const myHello = (msg) => {
    // alert("hello " + msg + "!!") ;
    document.getElementById("msg").innerHTML = "hello <span> " + msg + "</span>!!" ;
}