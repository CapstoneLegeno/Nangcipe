const crypto = require("crypto");

const salt = crypto.randomBytes(128).toString('base64');

console.log(salt);

let test = "11111";

const password = crypto.createHash('sha256').update(test + salt).digest('hex');

console.log(password)