const functions = require('firebase-functions');
const jwtHandlers = require('../lib/jwtHandlers');
const db = require('../db/db');
const util = require('../lib/util');
const statusCode = require('../constants/statusCode');
const responseMessage = require('../constants/responseMessage');
const { userDB } = require('../db');
const { TOKEN_INVALID, TOKEN_EXPIRED } = require('../constants/jwt');

const checkUser = async (req, res, next) => {
  let client;
  try {
    client = await db.connect(req);

    let user;
    //1. access && refresh 만료 -> error
    //2. access 만료 && refresh 유효 -> access 재발급
    //3. access 유효 && refresh 만료 -> refresh 재발급
    //4. access && refresh 유효 -> 다음 미들 웨어
    const { refreshtoken } = req.headers;
    const token = req.headers.accesstoken;

    if (!req.headers) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_AUTH_HEADER));
    // const token = authHeader.substring(7, authHeader.length);
    if (!token || !refreshtoken) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.TOKEN_EMPTY));

    const decodedToken = jwtHandlers.verify(token);
    const decodedRefreshToken = jwtHandlers.verify(refreshtoken);

    //유효하지 않음
    if (decodedToken === TOKEN_INVALID || decodedRefreshToken === TOKEN_INVALID) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.TOKEN_INVALID));

    if (decodedToken === TOKEN_EXPIRED) {
      //#1 : error
      if (decodedRefreshToken === TOKEN_EXPIRED) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.TOKEN_EXPIRED));
      //#2 : access 재발급
      else {
        const userId = decodedRefreshToken.id;
        if (!userId) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.TOKEN_INVALID));
        user = await userDB.getUserById(client, userId);
      }
    }
    //#3 refresh 재발급 && #4 -> 로직 동일
    // else if (decodedRefreshToken === TOKEN_EXPIRED) {
    const userId = decodedToken.id;
    if (!userId) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.TOKEN_INVALID));
    user = await userDB.getUserById(client, userId);
    // }

    if (!user) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.NO_USER));

    req.user = user;
  } catch (error) {
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }

  next();
};

module.exports = { checkUser };
