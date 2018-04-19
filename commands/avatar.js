exports.run = (Discord, client, message, args) => {
var embederrordm = new Discord.RichEmbed()
        .setTitle('${message.author.username}'s avatar:')
        .setImage('${message.author.avatarURL}')
        .setFooter('Koala Bot | Made by Aaron')
        .setColor('#000000');
message.reply('Here's your avatar:');
message.channel.send(embederrordm);
}
