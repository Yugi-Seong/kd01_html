// DOM 생성이 되고 난 후 
document.addEventListener('DOMContentLoaded', () => {
    // 제어할 요소 가져오기 
    const txt1 = document.querySelector('#txt1');
    const btn = document.querySelector('button');
    const img = document.querySelector('img');

    // 랜덤 게임수 
    let n ;
   // 랜덤수가 생성 되었는지 확인 
    let isFlag = false ;

    // 확인 버튼이 눌러졌을때, 
    btn.addEventListener('click', (e) =>{
        e.preventDefault(); 
        if ( !isFlag ){
            n = Math.floor(Math.random()*100) + 1 ; // 1~100 까지 
            isFlag = true ;
            img.setAttribute('src','../img/what.png')
            txt1.value = '';
            txt1.style.display ='inline';
            txt1.focus(); // 커서 입력
            btn.innerHTML = '확인';
            console.log(n);
            return ; // 함수에 빠져나가려면 return 
        }

        // 숫자 비교 
        if (parseInt(txt1.value) > n){ // 입력한 숫자가 n보다 큰 경우 : down
            img.setAttribute('src','../img/down.png');
        }else if(parseInt(txt1.value) < n){ // 입력한 숫자가 n보다 작은 경우 : up
            img.setAttribute('src','../img/up.png')
        }else if(parseInt(txt1.value) == n){  // 숫자를 맞춘 경우
            txt1.style.display = 'none';
            btn.innerHTML = '다시하기';
            isFlag = false ; 
            img.setAttribute('src','../img/good.png')
        }

    })

});