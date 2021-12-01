const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-b36aa-firebase-adminsdk-5slhh-949728670f.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};
