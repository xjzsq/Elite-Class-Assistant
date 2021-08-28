const axios = require('axios');
require('./security.js');
var Modulus, public_exponent, username, password, encrypedPwd;
username = "Q19010112"
password = "QwQ@65535"
axios.get("http://rzfw.njupt.edu.cn/cas/v2/getPubKey", { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE' } }).then((response) => {
  Modulus = response.data["modulus"];
  public_exponent = response.data["exponent"];
  console.log(Modulus, public_exponent);
}).then(() => {
  let key = new getKeyPair(public_exponent, "", Modulus);
  let reversedPwd = password.split("").reverse().join("");
  encrypedPwd = encryptedString(key, reversedPwd);
  console.log(encrypedPwd);
});