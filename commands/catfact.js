
const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);
    message.channel.send(body.fact)
}
