const memberArr = [{
        "name": "이솔",
        "address": "수원시",
        "age": 24,
        "hobby": "클래식음악감상"
    },
    {
        "name": "최영재",
        "address": "용인시",
        "age": 21,
        "hobby": "신문 읽으며 브런치 즐기기"
    },
    {
        "name": "문규원",
        "address": "성남시",
        "age": 23,
        "hobby": "독서와 함께하는 티타임"
    },
    {
        "name": "허유정",
        "address": "용인시",
        "age": 23,
        "hobby": "차 마시면서 서예하기"
    }
]

const printMember = memberArr.map((member) => {
    console.log(`이름은 ${member.name}이고, 사는 곳은${member.address}, 나이는 ${member.age}, 취미는 ${member.hobby}입니당!`);
});