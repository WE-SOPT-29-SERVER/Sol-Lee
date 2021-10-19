const fs = require("fs");

const numArr = [1, 2, 3, 4, 5];

numArr.forEach(num => {
    const title = "sync" + num;
    const data = `파일이 잘 만들어졌어요~ \n 제 이름은 '${title}.txt'입니다.`;
    fs.writeFileSync(`${title}.txt`, data); // 이 부분이 다름!!
    console.log(`${title} 동기방식이니 순서에 맞게`);
})
//순서 -> 항상 순서대로