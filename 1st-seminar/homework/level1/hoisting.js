//original code
hoistFunction();

//hoisting : 선언부가 항상 위로 올려진다.
//정확히 어디서 호이스팅이 일어나는지 모르면 스코프 꼬일수 있음
//var <-> let,const : 헷갈림. var은 가급적 쓰지않는다!
function hoistFunction() {
  //var x; 가 이부분으로 올려짐
  console.log(x); //undefined
  var x = 'var';
  console.log(x); //var
}
