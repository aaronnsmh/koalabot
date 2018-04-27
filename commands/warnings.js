exports.run = (Discord, client, message, args) => {
message.chanel.send("Please search the following in #logs by clicking in the search box:")
let user = message.mentions.users.first();
message.channel.send("```in: logs Warning" + user.id + "```")
}
