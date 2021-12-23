//Function Scope
//var : 함수 밖에서도 접근 가능
if (true) {
  var x = 'var';
}
console.log(`var: ${x}`);

//Block Scope
//let,const : 함수 밖에서 접근 불가
if (true) {
  let y = 'let';
  const z = 'const';
}
// console.log(`let: ${y}`); //불가
// console.log(`const: ${z}`); //불가

//var : 함수 밖에서는 사용 불가
function colorFunction() {
  var color = 'blue';
  console.log(color);
}
// console.log(color);

//let,const : 블록 스코프 - 블록이 바뀔때마다 새로운 변수가 됨
const arr = [1, 2, 3];
//이런식으로 사용하면 이부분 한번에만 사용 가능. 아래의 반복문과 다른 변수가 됨.

for (let i = 0; i < arr.length; i++) {}

const arr2 = [5, 6, 7];
for (let i = 0; i < arr2.length; i++) {}
