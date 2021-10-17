const fs = require("fs");
const crypto = require("crypto");

//Read File
const readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName + ".txt", 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};

//encrpt crypt+salt
const encrypt = (password) => {
    return new Promise((resolve, reject) => {
        const hex = crypto.createHash("sha512", password).update(password).digest("hex");
        const base64 = crypto.createHash("sha512").update(password).digest("base64");

        const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
        const iterations = 100000;
        const keylen = 64;
        const digest = "sha512";
        const callback = (err, derivedKey) => {
            if (err) throw err;
            resolve(derivedKey.toString("hex"));
        }
        crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);

    })
}

//write file
const writeFile = (encryptedPassword) => {
    return new Promise((resolve, reject) => {
        const title = "hashed";
        const data = encryptedPassword;
        fs.writeFile(`${title}.txt`, data, (err, data) => {
            if (err) err
            console.log("file save success!");
        })
    })
}

const printPassword = async (fileName) => {
    const password = await readFile(fileName);
    const encryptedPw = await encrypt(password);
    const printPw = await writeFile(encryptedPw);
    console.log(printPw);
    console.log(encryptedPw)
}

printPassword("password");