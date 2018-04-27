
const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    const api = "https://verify.eryn.io/api/user/113691352327389188";
    snekfetch.get(api).then(console.log);
}
