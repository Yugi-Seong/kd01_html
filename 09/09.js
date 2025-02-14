document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('button');
    const img = document.querySelectorAll('img');
    const msg = document.querySelector('#msg');
 
    for (let bt of btns) {
        // n 번 버튼을 눌렸을때
        bt.addEventListener('click', () => {

            // computer 의 주사위 랜덤으로 생성
            let number = Math.floor(Math.random() * 6) + 1;
            // computer 의 주사위 랜덤 수 이미지로 변경 
            img[0].setAttribute('src', `../img/${number}.png`);
            img[0].setAttribute('alt', `../img/${number}`);

            // user 의 주사위는 n으로 변경 
            // let n = bt.textContent[0];
            let n = parseInt(bt.textContent.slice(0,1)); 
    
            console.log(n);
            // user 의 이미지 변경
            img[1].setAttribute('src', `../img/${n}.png`);
            img[1].setAttribute('alt', `../img/${n}`);


            // 결과 확인
            // document.getElementById('msg').innerHTML = n == number ? "맞춤" : "틀림" ;
            msg.innerHTML = n == number ? "맞춤" : "틀림" ;
        });
    }

});


