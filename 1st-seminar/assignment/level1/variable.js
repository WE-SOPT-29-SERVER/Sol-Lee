//var : 재선언 가능
var variableVar = '123';
var variableVar = '321';
//var : 재할당 가능
variableVar = '456';

console.log('variableVar', variableVar);

//let : 재선언 불가
let variableLet = '123';
//let variableLet = '321';

//let : 재할당 가능
variableLet = '456';

console.log('variableLet', variableLet);

//const : 재선언 불가
const variableConst = '123';
//const variableConst = '321';

//Const : 재할당 불가
//variableConst = '456';
//const someConst; //초기화 값이 없을때도 에러가 남.

console.log('variableConst', variableConst);
