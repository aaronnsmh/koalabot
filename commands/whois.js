

const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let address = 354349136998301706
    let {body} = await superagent
    let site = "https://verify.eryn.io/api/user/" + address
    .get(`https://verify.eryn.io/api/user/354349136998301706`);
    console.log(body.robloxUsername)
}
