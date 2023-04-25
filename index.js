const { argv } = require("process");
const crypto = require('crypto');

function md5(buf) {
    const hash = crypto.createHash('md5');
    hash.update(buf);
    return hash.digest('hex');
}
if (argv.length <= 2) {
  console.log("no arguments");
  process.exit(1);
}
let messageForHash = [];
argv.slice(2).forEach((val) => {
  messageForHash.push(val);
});
messageForHash.forEach((val) => {
  console.log(`${val} = ${md5(val)}`);
});
