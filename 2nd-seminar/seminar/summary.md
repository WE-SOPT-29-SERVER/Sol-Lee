- 비동기 구현 방법

1.  콜백함수 : 함수가 인자로 들어가는 것

setTimeout(function(){
console.log('Bye);
},3000)
//3000ms를 기다린 후에 함수를 실행해라

//callback hell 가능성있음

2. Promise
   // 기본적으로 콜백함수의 성질

- pending : 최초 생성된 시점의 상태
- fullfilled : 작업이 성공적으로 완료된 상태
- rejected : 작업이 실패한 상태

const promise=new Promise(function(resolve,reject{
//logic
const age=25;
if(age>20){
resolve(age); //fulfilled
}
reject(new Error("성인이 아닙니다."));//rejected
});

    promise
    .then((resolvedData)=>{//fulfilled 되면 여기로 드가짐
        console.log(resolvedData)
    })
    .catch(err=>{ //reject되면 여기로 드가짐
        console.log(err);
    });
