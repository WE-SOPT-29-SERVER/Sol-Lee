//async : 암묵적으로 promise를 반환
//await : promise를 기다림(resolve/reject), async로 정의된 내부에서만 사용가능

const members = require("./members");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

const getMembers = async (members) => {
  const online = await getOnline(members);
  const ob = await getOB(online);
  const offline = await getOffline(members);
  const yb = await getYB(offline);

  console.log(ob, yb);
};

getMembers(members);
