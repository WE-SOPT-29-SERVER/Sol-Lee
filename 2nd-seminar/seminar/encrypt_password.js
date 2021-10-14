const fs = require("fs");
const crypto = require("crypto");

//fileRead
// let password = fs.readFile("password.txt", 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log("pa", password);

let password = "qwerty";
//encrypt crypto+salt
const hex = crypto.createHash("sha512", password)
    .update(password)
    .digest("hex");


console.log(password);

// //writeFile
// const title = "hashed";
// const data = password;
// fs.writeFile(`${title}.txt`, data, (err, data) => {
//     console.log("file save success!");
// })