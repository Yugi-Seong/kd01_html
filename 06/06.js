function lotto(){
    // 1. 로또 번호 생성
    //1-1. 로또 배열  
    
    let arrLotto = [] ;  

    // 1-2. 6개 + 1개 번호 추출 
    let number  ;

    while(arrLotto.length < 6){
        let n = Math.floor(Math.random() *45) + 1 ; // 1 ~ 45 까지 

        if ( !arrLotto.includes(n) ){
            arrLotto.push(n);
        }
    }
        

    //1-2. 6개 번호 정렬
    arrLotto.sort((a,b) => a-b) ;
    console.log(arrLotto) ;

    // arrLotto.push('+') ;



    // 1-3 . + 1개 번호 추출
    while(arrLotto.length < 7){
        let n = Math.floor(Math.random() *45) + 1 ; // 1 ~ 45 까지 

        if ( !arrLotto.includes(n) ){
            arrLotto.push(n);
        }

    }

    console.log(arrLotto);
    arrLotto.splice(6,0,'+');
    console.log(arrLotto);

    // 화면의 id =  msg 부분에 출력
    console.log(arrLotto) ;
    let spanTgs = arrLotto.map(item => 
                        item == '+' ? `<span class='spplus'>${item}</span>`:`<span class='sp${Math.floor(item/10)}'>${item}</span>`) 
                            .join('');
    document.getElementById('msgLotto').innerHTML = spanTgs ;
}