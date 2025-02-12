// 배열 선언 

let arr = [] ; // 빈 배열 
let arr1 = [1,2,3,4] ;// 초기값이 있는 배열 

let arr2 = new Array() ; // array 객체선언

console.log(arr);
console.log(arr1);
console.log(arr2);

// 배열의 추가 
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

// 배열 수정 
arr[0] = 1 ; 
console.log(arr);

// 배열 삭제 
arr.pop();
console.log(arr);

// 배열 비우기 
arr.length = 0 ; 
console.log(arr);

// 배열의 순회
arr = [10,20,30,40,50] ;

console.log("기본 반복");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log("in 반복");
for(let i in arr){ // in 뒤의 부분(arr의) '인덱스'를 하나씩 가져옴 
    console.log(i);
    console.log(arr[i]);
}

console.log("of 반복");
for(let i of arr){ 
    console.log(i); // 배열의 인덱스에 해당하는 '값'이 나옴 
}

console.log("of 반복2");
for(let [i,item] of arr.entries()){ // 키와 값을 쌍으로(배열로) 반환 : 구조 분해 할당
    console.log(i,item);
}

console.log("forEach method"); // forEach 함수 나올시, 화살표 함수 먼저 작성
arr.forEach((item,i) => { //  값, 키의 순서대로 나옴
    console.log(i,item);
}); // 인자로 함수가 들어감 : 콜백함수 

console.log("forEach method2"); 
arr.forEach(function(item,i){ 
    console.log(i,item);
}); 


// map() 
console.log("map 메소드"); 
let arrMap = arr.map((item)=>{ // return 이 존재하기에 변수로 받아주어야 한다
    console.log(item);

    return item *2 ;
}); // 콜백함수가 들어감
console.log(arrMap); 


console.log("map 메소드2"); 
arrMap = arrMap.map(item => item *2 ); 
console.log(arrMap); 


console.log("map 메소드3"); 
arrMap = arrMap.map((item,i) => item *i ); 
console.log(arrMap); 


// let i =[1,2];
// let a = arr.map((i)=>{
//     console.log(i*2);
//     return i *2 ;
// });
// console.log(a);



// filter() 
console.log("filter 메소드"); 
    arrFilter = arr.filter((item)=>{ 
    console.log(item);

    return item % 2 == 0 ;
}); 
console.log(arrFilter); 

 
console.log("filter 메소드2"); 
arrFilter = arr.filter(item=>item % 2 == 0 ); 
console.log(arrFilter); 


console.log("filter 메소드3"); 
arrFilter = arr.filter((item,i)=>i == 3 ); // index 3인 값을 filter 해 가져옴 
console.log(arrFilter); 


// map() + filter() 
console.log("map과 filter 동시에 사용");
let arrMF = arr.map((item,i)=>item * i)
                .filter(item => item % 3 == 0); // 3의 배수인 것만 필터하여 출력 
console.log(arrMF) ;


// 랜덤수 생성
console.log("랜덤수 생성");
let arrRand = Math.random();  
// let arrRand = Math.floor(Math.random() * 6); // 0 ~ 5
// let arrRand = Math.floor(Math.random()) + 1 ; 
console.log("arrRand : ", arrRand);

// 6개의 숫자가 랜덤으로 배열에 들어가도록
let arrRand1 = [] ;

for(let i=0 ; i<6 ; i++){
    arrRand1[i] = Math.floor(Math.random() * 100);
};
console.log(arrRand1); 


// 6개의 숫자가 랜덤으로 배열에 들어가도록
let arrRand2 = [0,0,0,0,0,0,] ;
arrRand2.length = 0

for(let i=0 ; i<6 ; i++){
    arrRand2.push(Math.floor(Math.random() * 6 ) + 1);
};
console.log(arrRand2); 

arrRand2 = arrRand2.map(item =>Math.floor(Math.random() * 6 ) + 1);

// sort 매소드
// 오름차순
arrRand2.sort((a,b) => a -b ) ;
console.log(arrRand2) ;
// 내림차순
arrRand2.sort((a,b) => b -a ) ;
console.log(arrRand2) ;

// 순서 뒤집을때 사용함수 : reverse()
console.log(arrRand2.reverse()) ;

// 모든 요소를 문자열로 결합
console.log(arrRand2.join()) ;// 문자열로 출력됨 (배열은 변경 되지 않음 )

console.log(arrRand2.join(''));
console.log(arrRand2.concat(arr)); // 배열 2개 결합 (arrRand2 + arr)


// 요소 확인 
console.log(arrRand2.indexOf(10)) ; // 없으면 -1 출력
console.log(arrRand2.includes(10)) ; // 있으면 false 출력 


// 전개 연산자
console.log(`arr = ${arr}`);

let arrCp ;
arrCp = arr.map(item => item) ;
console.log(arrCp);


let arrCopy = [...arr, ...arrRand2];  // concat 역할 가능 
console.log(`arrCopy = ${arrCopy}`);



// 로또 번호 생성시 : 보너스 번호, 중복 X 



