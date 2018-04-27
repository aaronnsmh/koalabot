exports.run = (Discord, client, message, args) => {
    let user = message.mentions.users.first();
    message.channel.send(`Please search the following in #logs by clicking in the search box:`);
    message.channel.send('in: logs Warning ' + user.tag)
}
