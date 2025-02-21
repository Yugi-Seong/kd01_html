// 영화 진흥위원회 
const mvAPI = '';
const baseMvUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;

// TMDB 
const tmdbApi = '';
const baseTMDBUrl = 'https://api.themoviedb.org/3/search/movie?';

// 영화 포스터 저장 배열
let posterArr = [];


// 포스터 가져오기
const getPoster = async(movieNm) => {
    let url = `${baseTMDBUrl}api_key=${tmdbApi}&query=${movieNm}` ;

    const resp = await fetch(url) ;
    const data = await resp.json() ;
  
    console.log('baseTMDBUrl',url, data.results[0].poster_path)
    if (data == undefined)
      posterArr.push('') ;
    else
      posterArr.push(data.results[0].poster_path) ;
}


// 박스 오피스 가져오기
const getBoxOfficeList = async() => {
    const mvType = document.querySelector('[type=radio]:checked').value;
    const dt = document.querySelector('[type=date]').value.replaceAll('-','');
    const ul = document.querySelector('ul');
    // 포스터 
    console.log("mvType :"+mvType);

    // 포스터 배열 초기화 
    posterArr = [];
    let url = `${baseMvUrl}&key=${mvAPI}&targetDt=${dt}`;

    if (mvType == 'K' || mvType == 'F'){
        url = `${url}&repNationCd=${mvType}` ;
    }

    
    // fetch
    const resp = await fetch(url);
    const data = await resp.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList ;
    console.log('dailyBoxOfficeList',dailyBoxOfficeList)
    
    let tags = '';
    for(let item of dailyBoxOfficeList){
        tags = tags + 
            `<li>
                <span class="sp">${item.rank}</span>
                ${item.movieNm}
            </li>` ;
        await getPoster(item.movieNm);
    }
    ul.innerHTML = tags ;
    
    
    const lis = document.querySelectorAll('li');
    for(let [i,li] of lis.entries()){
        li.addEventListener('mouseenter',()=>{
            posterArr[i]=='' ? myPoster.innerHTML = "자료없음" 
            : mvPoster.innerHTML =  `<img src="https://image.tmdb.org/t/p/w500${posterArr[i]}">`;
        })
    }
    console.log(lis);

    console.log("posterArr",posterArr);
     
}



//어제 날짜 가져오기
const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate()-1);
    

    // 년도 가져오기 
    let year = dt.getFullYear();

    // 월
    let month = String(dt.getMonth()+1).padStart(2,0) ;
    // month = month < 10 ? '0' + month : month ;

    // 일
    let day = String(dt.getDate()).padStart(2,0) ; 

    return year + '-' + month + '-' + day;
}

document.addEventListener('DOMContentLoaded',()=>{
     
    const inputDate = document.querySelector('[type=date]');
    const radios = document.querySelectorAll('[type=radio]');
    const bt = document.querySelector('button');

    // 어제 날짜 구하기 
    const yesterday = getYesterday() ;
    inputDate.max = yesterday ;
    inputDate.value = yesterday ;
    console.log(yesterday);

    // 박스오피스 가져오기
    getBoxOfficeList();
    
    bt.addEventListener('click',(e)=>{
        e.preventDefault();
        getBoxOfficeList();
    });
    console.log(yesterday);

});