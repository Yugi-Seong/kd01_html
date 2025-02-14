// DOM 이로드가 되었을때 
document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기 (버튼, 이미지)
    const btn = document.querySelector('button');
    const img = document.querySelector('img')

    // 버튼이 클릭될 경우 
    btn.addEventListener('click',() => {

        // 이미지 속성을 변경
        // 1~6 까지의 임의의 수 생성 
        let number  = Math.floor(Math.random()*6) + 1 ;  

        
        // 주사위 1이 나올경우 사진으로 변경   
        img.setAttribute("src", `../img/${number}.png`)
        img.setAttribute("alt", `../img/${number}`)

    });

});