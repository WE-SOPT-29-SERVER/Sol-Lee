const members = require("./members");
//console.log(members);

// const seminarGrouping = (callback, timeout) => {
//   setTimeout(callback, timeout);
// };

// const obGrouping = (progress) => {
//   return new Promise((resolve, reject) => {
//     seminarGrouping(() => {
//       resolve(
//         members.filter((member) => {
//           return member.group == "OB" && member.location == "online";
//         })
//       );
//     });
//   }, 1000);
// };

// const ybGrouping = (progress) => {
//   return new Promise((resolve, reject) => {
//     seminarGrouping(() => {
//       resolve(
//         members.filter((member) => {
//           return member.group == "YB" && member.location == "offline";
//         })
//       );
//     });
//   }, 2000);
// };

// obGrouping(members)
//   .then((progress) => ybGrouping(progress))
//   .then((progress) => console.log(progress));

// const members = require("./members");

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

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);
