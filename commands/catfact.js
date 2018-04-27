
const superagent = require("superagent");
exports.run = (Discord, client, message, args) => {
module.exports.run = async (bot, Discord, client, message, args) => {
    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);
    message.channel.send(body.fact)
}
}
