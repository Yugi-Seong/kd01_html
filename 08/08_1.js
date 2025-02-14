// const bt1 = document.getElementById('bt1');
// bt1.addEventListener('click', () => { 
//     console.log('bt1')
// } ) ; //DOM 이 생성 되기 전 event 가 발생하기 때문에 오류 발생


// // 돔이 다 생성 된 후 html 에 버튼 id 가 bt1 인경우 
// document.addEventListener('DOMContentLoaded',()=>{
//     const bt1 = document.getElementById('bt1');
//     bt1.addEventListener('click', () => { 
//         console.log('bt1')
//     } ) ; 

// }) ;

// 돔이 다 생성 된 후
document.addEventListener('DOMContentLoaded',()=>{
    // button 요소 모두 가져오기 
    // 1개인 경우도 결과는 노드리스트 
    const bts = document.querySelectorAll('button');
    console.log(bts);

    // 노드리스트 순회 
    for(let bt of bts){

        bt.addEventListener('click',() => {
            // console.log(bt.innerHTML) ;
            // 속성 변경
            bt.setAttribute("id", bt.textContent);
            // bt.innerHTML = bt.textContent + "1" ;
            // console.log(bt.textContent) ;
            console.log(bt.getAttribute) ;
        });
    }
}) ;  // querySelectorAll 의 결과는 nodelist (배열)


