
const snekfetch = require("snekfetch");
module.exports.run = async (bot, Discord, client, message, args) => {
    const api = "https://verify.eryn.io/api/user/113691352327389188";
    snekfetch.get(api).then(r => {
        let body = r.body;
        let entry = body.find(post.robloxUsername);
        console.log(entry);
});
}
