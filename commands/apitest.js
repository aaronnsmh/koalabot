
const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    const id = 281060171730649089
    const api = "https://verify.eryn.io/api/user/113691352327389188";
    snekfetch.get(api).then(r => {
        let body = r.body;
        let entry = body.find(post => post.id === robloxUsername);
        message.channel.send(entry);
});
}
