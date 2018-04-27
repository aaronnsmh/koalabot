exports.run = (Discord, client, message, args) => {
    let user = message.mentions.users.first();
    message.channel.send(`Please search the following in #logs by clicking in the search box:`);
    const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription('in: logs Warning ' + user.tag);
    message.channel.send({embed});
}
