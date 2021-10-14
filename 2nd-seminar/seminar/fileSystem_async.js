//비동기 동기 방식 -> 콜백함수 차이
//hw : 파일 시스템 실습 따라 하기(+미션 포함)

const fs = require("fs");

const numArr = [1, 2, 3, 4, 5];

/*
    data는 생성할 file에 적을 데이터
    fs.writeFile (file, data, [options], callback) {}
    비동기 방식으로 파일 쓰기 - 순서 확인해보기
*/

numArr.forEach(num => {
    const title = "async" + num;
    const data = `파일이 잘 만들어졌어요!\n제 이름은 '${title}.txt입니다.`;
    fs.writeFile(`${title}.txt`, data, (err, data) => {
        console.log(`${title} 비동기 방식이라 순서가 뒤죽박죽 ~.~`);
    });
});
//순서 : 실행할때마다 달라지고 뒤죽박죽임