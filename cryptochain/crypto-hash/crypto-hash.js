const crypto = require('crypto');

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256');
  const updatedHash = hash.update(inputs.sort().join(''));
  const digestedHash = updatedHash.digest('hex');
  return digestedHash;
};

module.exports = cryptoHash;
