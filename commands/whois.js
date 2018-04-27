

const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let address = message.author.id;
    let {body} = await superagent
    let site = "https://verify.eryn.io/api/user/" + address
    .get(`https://verify.eryn.io/api/user/` + address);
    console.log(body.robloxUsername)
}
