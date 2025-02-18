let arr = [0,0,0,0,0,0,0,0,1] ; // 1 위치가 폭탄 위치 => 배열의 위치를 변경 : 셔플
let isFlag = true ;
console.log(arr);
let number ;

document.addEventListener('DOMContentLoaded', ()=>{
    const cols = document.querySelectorAll('.col');
    const btn = document.querySelector('button');

    // // 보드에 숫자 쓰기 
    // for(let [idx,col] of cols.entries()){
    //     col.innerHTML = idx + 1;
    // }

    // 클릭시 해당 인덱스 출력 
    for(let [idx,col] of cols.entries()){
        col.addEventListener('click',() =>{
            if ( isFlag ){
                console.log(idx+1);
           
                // 폭탄의 번호를 클릭할 경우 게임 종료
                if (idx+1 == number){
                    col.innerHTML = '<img src="../img/boom.png">' ;
                    msg.innerHTML = "게임이 종료 되었습니다.";
                
                    isFlag = false ;
                    

                }else {
                    // 폭탄이 아닌 버튼 클릭시 하트가 나오게
                col.innerHTML = '<img src="../img/hart.png">' ;

                }
                // 게임 중에 번호 나오지 않도록 
                btn.style.display ='none' ;

            }
        });
    }


    // 폭탄 섞이 버튼 눌릴경우 폭탄섞기
    btn.addEventListener('click',()=>{
        // // 배열 셔플 
        // arr.sort(() => Math.random()-0.5);
        // console.log(Math.random()-0.5)
        // console.log(arr);

        // 폭탄 번호 생성 
        number = Math.floor(Math.random() * 9)+1 ;
        console.log("폭탄 번호 : "+number);

        for(let [idx,col] of cols.entries()){
            col.innerHTML =  idx + 1;
        };
         
    });


    
    

    // 하트 8개가 나온 후 나머지 것은 폭탄을 하트로 변경 후 성공 

});