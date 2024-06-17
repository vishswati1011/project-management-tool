const crypto = require('crypto');
require('dotenv').config();
// used to convert pass in encrypted format
const hashPassword = password => crypto.createHash('sha256').update(password).digest('hex');

// used to compare pass 
const compareHashPassword = (password, dbpass) => {
    if (hashPassword(password) === dbpass) {
        return true;
    }
    return false;
};
module.exports = {
    hashPassword,
    compareHashPassword,
};
