const expressJWT = require("express-jwt");
const secret = require("../configs/secrets");

module.exports =    expressJWT({
    secret: secret.key,
    algorithms: ["HS256"],
});