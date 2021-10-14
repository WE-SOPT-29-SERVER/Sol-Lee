//salt : 그대로 저장, 해싱을 할때 추가되는 임의의 문자열, 유저마다 다름
//key stretching : 해싱 여러번
//key stretching + salt => 해싱보다 더 암호화 되는 방법
//rainbowattack : 자주 사용하는 비번 해싱값 리스트로 다 대입해보는 암호화 공격

//암호화 방식
//1. 그대로 넣기
//2. 해싱
//3. 해싱+소금치기
//4. 키스트레칭+소금
//5. pbkdf2

const crypto = require("crypto");
//pbkdf2 방식
let password = "qwerty";
const hex = crypto.createHash("sha512").update(password).digest("hex");
const base64 = crypto.createHash("sha512").update(password).digest("base64");

// console.log("hex:", hex);
// console.log("\n");
// console.log("base64:", base64);
// console.log("Test", password);

const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const callback = (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
};

crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);

// //salt+hash 방식
// const encrypt = (salt, password) => {
//   crypto.pbkdf2(
//     password,
//     salt.toString(),
//     1,
//     32,
//     "sha512",
//     (err, derivedKey) => {
//       if (err) throw err;
//       const hashed = derivedKey.toString("hex");
//       console.log("salt : ", salt);
//       console.log("hashed : ", hashed);
//     }
//   );
// };

// const password = "fl0wer";
// const salt = crypto.randomBytes(32).toString("hex");
// encrypt(salt, password);