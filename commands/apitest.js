const api = "http://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, arge) => {
    snekfetch.get(api).then(console.log);
}
