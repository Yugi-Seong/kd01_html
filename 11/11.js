document.addEventListener('DOMContentLoaded', () => {
   const inputBox = document.querySelector('input');
   const btn1 = document.querySelectorAll('button')[0];
   const btn2 = document.querySelectorAll('button')[1];
   const img = document.querySelector('img');
   
    
   // 컴퓨터가 생각한 숫자 
   const number = Math.floor(Math.random() *100) + 1 ;
   console.log(number);
   
   // 확인 버튼이 눌러졌을때
   btn1.addEventListener('click', ()=>{

    if (inputBox.value < number) {
        img.setAttribute("src", "../img/down.png");
        img.setAttribute("alt", "../img/down");

    }else if (inputBox.value > number){
        img.setAttribute("src", "../img/up.png");
        img.setAttribute("alt", "../img/up");
    }else {
        img.setAttribute("src", "../img/good.png") ;
        img.setAttribute("alt", "../img/good") ;
    }

   });


   // 다시하기 버튼이 눌러졌을때
   btn2.addEventListener('click',()=>{
        //이미지 what으로 변경
        img.setAttribute("src", "../img/what.png");
        img.setAttribute("alt", "../img/what");
                
        // 컴퓨터가 생각한 숫자 
        const number = Math.floor(Math.random() *100) + 1 ;
        console.log(number);
        
        // 확인 버튼이 눌러졌을때
        btn1.addEventListener('click', ()=>{

            if (inputBox.value < number) {
                img.setAttribute("src", "../img/down.png");
                img.setAttribute("alt", "../img/down");

            }else if (inputBox.value > number){
                img.setAttribute("src", "../img/up.png");
                img.setAttribute("alt", "../img/up");
            }else {
                img.setAttribute("src", "../img/good.png") ;
                img.setAttribute("alt", "../img/good") ;
            }

        });
   });
});