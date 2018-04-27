
const superagent = require("superagent");
exports.run = async (bot, Discord, client, message, args) => {

    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);
    message.reply(body.fact)
}

