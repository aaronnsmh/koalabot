const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
    let search = args.slice(0).join(" ");
    if (search.length < 1) 
        return message.reply('You must supply something to search.');
    let {body} = await superagent
    .get(`http://api.giphy.com/v1/gifs/translate?api_key=dc6zaTOxFJmzC&s=test`);
    let url = body.url
    message.reply(body.url)
}
