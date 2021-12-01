const members = [{
        name: "강한희",
        part: "Server",
        group: "OB"
    },
    {
        name: "고성용",
        part: "Server",
        group: "OB"
    },
    {
        name: "구건모",
        part: "Server",
        group: "YB"
    },
    {
        name: "권세훈",
        part: "Server",
        group: "YB"
    },
    {
        name: "김영권",
        part: "Server",
        group: "YB"
    },
    {
        name: "김은지",
        part: "Server",
        group: "YB"
    },
    {
        name: "김진욱",
        part: "Server",
        group: "YB"
    },
    {
        name: "김희빈",
        part: "Server",
        group: "OB"
    },
    {
        name: "남지윤",
        part: "Server",
        group: "YB"
    },
    {
        name: "문규원",
        part: "Server",
        group: "YB"
    },
    {
        name: "박나희",
        part: "Server",
        group: "OB"
    },
    {
        name: "박정현",
        part: "Server",
        group: "YB"
    },
    {
        name: "박현지",
        part: "Server",
        group: "OB"
    },
    {
        name: "변주현",
        part: "Server",
        group: "OB"
    },
    {
        name: "서호영",
        part: "Server",
        group: "OB"
    },
    {
        name: "설지원",
        part: "Server",
        group: "YB"
    },
    {
        name: "손시형",
        part: "Server",
        group: "YB"
    },
    {
        name: "안준영",
        part: "Server",
        group: "OB"
    },
    {
        name: "장서현",
        part: "Server",
        group: "OB"
    },
    {
        name: "오예원",
        part: "Server",
        group: "OB"
    },
    {
        name: "이다은",
        part: "Server",
        group: "OB"
    },
    {
        name: "이동근",
        part: "Server",
        group: "YB"
    },
    {
        name: "이솔",
        part: "Server",
        group: "OB"
    },
    {
        name: "이승헌",
        part: "Server",
        group: "YB"
    },
    {
        name: "이정은",
        part: "Server",
        group: "YB"
    },
    {
        name: "이제준",
        part: "Server",
        group: "YB"
    },
    {
        name: "정설희",
        part: "Server",
        group: "OB"
    },
    {
        name: "조윤서",
        part: "Server",
        group: "OB"
    },
    {
        name: "조재호",
        part: "Server",
        group: "YB"
    },
    {
        name: "조찬우",
        part: "Server",
        group: "YB"
    },
    {
        name: "주어진사랑",
        part: "Server",
        group: "YB"
    },
    {
        name: "주효식",
        part: "Server",
        group: "YB"
    },
    {
        name: "채정아",
        part: "Server",
        group: "OB"
    },
    {
        name: "최영재",
        part: "Server",
        group: "OB"
    },
    {
        name: "최유림",
        part: "Server",
        group: "YB"
    },
    {
        name: "최진영",
        part: "Server",
        group: "YB"
    },
    {
        name: "허유정",
        part: "Server",
        group: "YB"
    },
];

//shuffle 함수 구현
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//yb,ob 나눠서 배열에 저장
let ob_members = members.filter((member) => member.group == "OB")
let yb_members = members.filter((member) => member.group == "YB")

//배열 각각 shuffle
shuffle(ob_members);
shuffle(yb_members);

//console.log(ob_members);

//조 배열 생성
const maxTeamNum = 4; //조 최대명수 : 4
let teamTotalNum = Math.floor(members.length / maxTeamNum); //조 개수
if (members.lenth % maxTeamNum != 0) teamTotalNum++;

let team_array = new Array(teamTotalNum);

//ob 먼저 넣고, yb 넣기
for (i = 0; i < ob_members.length; i++) {
    team_array[i % teamTotalNum] += (ob_members[i].name)
    team_array[i % teamTotalNum] += " "
}

for (i = 0; i < yb_members.length; i++) {
    team_array[i % teamTotalNum] += (yb_members[i].name)
    team_array[i % teamTotalNum] += " "
}

//각 조 출력
for (i = 0; i < teamTotalNum; i++) {
    console.log(`${i+1}조 : ${team_array[i]}`)
}