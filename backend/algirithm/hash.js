const crypto = require('crypto');
const salt = "VIbHRJmCL79L4nMLba+sdhVEtEfkhsnbgfRLI2kl9jxqdH3ymhdNSyTSJSKtfYxzWphEnMPrJP/IKitiMsiLH2lwZIEW//U0mOTaQfbnl0roqWAmOEzJUJ47PbtVXl0QU9oBKlGXb5LacK/IrPqcP/nwS5qMTPEX/SQZ0KLpOR8=";

const hashPassword = function(password) {
    const hashPassword = crypto.createHash('sha512').update(password + salt).digest('hex');
    return hashPassword;
}

exports.hashPassword = hashPassword;