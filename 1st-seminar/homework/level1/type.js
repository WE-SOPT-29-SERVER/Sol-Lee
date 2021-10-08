const str1 = 'Just do it';
const str2 = "Just don't do it";

const backtickStr = `안녕하세요 열분~ ${str1}반갑습니다.`;
//const backtickStr="안녕하세요 열분"+str1+"반갑습니다.";
console.log(backtickStr);

//null vs undefined
//null : Object 타입
//undefined : undefined 타입 (아직 지정 X)
//object(객체타입)를 제외한 나머지는 원시타입

console.log(typeof 1); //number
console.log(typeof 'str'); //string
console.log(typeof undefined); //undefined
console.log(typeof Symbol()); //symbol
console.log(typeof true); //boolean

console.log(typeof null); //object <- 버근데 수용^^(null은 원시타입 맞음)
