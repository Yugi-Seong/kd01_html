let arr = [0,0,0,0,0,0,0,0,1] ; // 1 위치가 폭탄 위치 => 배열의 위치를 변경 : 셔플
let isFlag = false ;
console.log(arr);
let number ;

// 리셋 함수 생성
const init = (cols) => {
    cnt = 0;
    isFlag = true ;

    // 보드에 숫자쓰기 
    for(let [idx,col] of cols.entries()){
        col.innerHTML =  idx + 1;
    };
}

document.addEventListener('DOMContentLoaded', ()=>{
    // 제어할 요소 가져오기 
    const cols = document.querySelectorAll('.col');
    const btn = document.querySelector('button');
    const msg = document.querySelector('#msg');

    // 하트갯수 
    let cnt = 0 ; 

    // 클릭시 해당 인덱스 출력 
    for(let [idx,col] of cols.entries()){
        col.addEventListener('click',() =>{

            if ( !isFlag ){
                cnt = 0 ;
                msg.innerHTML = "폭탄을 섞어주세요." ;
                btn.innerHTML = "폭탄 섞기";
                return ;
            }
            
            // 폭탄의 번호를 클릭할 경우 게임 종료
            if (idx+1 == number){
                col.innerHTML = '<img src="../img/boom.png">' ;
                msg.innerHTML = "게임이 종료 되었습니다.";
                btn.innerHTML = "다시하기";
                
                btn.disabled =false ; // 버튼 활성화 
                
                isFlag = false ; // 더이상 안 눌러지게 설정 
                return ;
                }
            // 게임 중
            if (idx+1 != number){
                // 게임 중에 버튼 비활성화 
                btn.disabled =true ;
                btn.innerHTML = "게임중...";
                // 폭탄이 아닌 버튼 클릭시 하트가 나오게
                col.innerHTML = '<img src="../img/hart.png">' ;
                cnt++;
                
                // 하트 8개가 나온 후 나머지 것은 폭탄을 하트로 변경 후 성공
                if (cnt == 8){
                    // 1이 있는 위치에 하트 추가 
                    cols[number-1].innerHTML = '<img src="../img/hart.png">';
                    msg.innerHTML = "성공" ;
                    btn.innerHTML = "다시하기";
                    btn.disabled =false ;
                    init(col); 
                    return;
                    }
                } 
        });
    } 


    
    btn.addEventListener('click',()=>{
        cnt = 0; 
        // 폭탄 번호 생성 
        number = Math.floor(Math.random() * 9)+1 ;
        console.log("폭탄 번호 : "+number);
        msg.innerHTML = "";

        init(cols);
    });
});