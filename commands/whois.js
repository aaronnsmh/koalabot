

const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let {body} = await superagent
    .get(`https://verify.eryn.io/api/user/354349136998301706`);
    console.log(body.robloxUsername)
}
