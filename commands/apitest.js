
const snekfetch = require("snekfetch");
module.exports.run = async (bot, Discord, client, message, args) => {
    const api = "http://jsonplaceholder.typicode.com/posts";
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = 1;
        let entry = body.find(post => post.id === id);
        message.channel.send(entry);
});
}
