
const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    console.log(body.url)
}

