// 템플릿 문자열 

// 함수 선언 1
function check1() {
    // console.log("check1") ;
    let s = document.getElementById("txt1").value ; // 입력된 값 가져옴
    
    // 문자열 출력 
    // console.log(s) ;
    // 한 문자씩 출력 
    // for(let i =0 ;i<s.length;i++){
    //     console.log(s[i]);
    // }

    // 파이썬의 for c in s 와 동일 : 한 문자씩 출력  
    // for(let c of s){
    //     console.log(c);
    // }

    // console.log(s.indexOf('s'));
    // console.log(s.includes('s')); 
    
    // console.log(s.slice(2,0));
    
    // let s2 = document.getElementById("txt2").value ; // 입력된 값 가져옴

    // document.getElementById("txt2").value = isNaN(s);
    // 텍스트 박스에 입력받는 것은 문자열로 됨 : 숫자계산은 parseInt 사용
    // document.getElementById("msg").innerHTML = parseInt(s) + parseInt(s2);

    // document.getElementById("txt2").value = s[-1] ;
    // document.getElementById("txt2").value = s[s.length-1] ;
    // document.getElementById("txt2").value = s.charAt(s.length-1) ;
    // document.getElementById("txt2").value = s.split(",")[0] ;
    // console.log(s.split(',')[1]);



}

// 함수 선언 2 : 화살표 함수 
// const check2 = function() {

// }

const check2 = () => {
    console.log("check2");
}

