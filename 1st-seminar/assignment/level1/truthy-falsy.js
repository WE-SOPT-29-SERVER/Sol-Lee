const num1 = 1;
const num2 = 2;

const str = '2';

//2-> "2"
const bool = true;

console.log(num1 == bool); //true

console.log(num2 == bool); //false

//Truthy
//대충 true다

//Falsy
//대충 false 다
//false,0,null,undefined  얘네만 false, 마이너스도 true

console.log(Boolean(-100));

//있는지 없는지 확인하는 방법 -> typeCasting
//if(!name){}

console.log(Boolean({})); //true
console.log(Boolean([])); //true

console.log(Boolean('')); //false

//null <-> undefined

//postgresql
//undefined 쓰지말기! sql에서 오류를 내버림!
