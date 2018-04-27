
const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, arge) => {
    let reason = args.slice(1).join(" ");
    const api = "https://verify.eryn.io/api/user/113691352327389188";
    snekfetch.get(api).then(console.log);
}
