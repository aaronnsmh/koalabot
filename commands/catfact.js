
const superagent = require("superagent");
exports.run = async (bot, Discord, client, message, args) => {

    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);

}
exports.run = (bot, Discord, client, message, args) => {
message.reply(body.fact)
}
