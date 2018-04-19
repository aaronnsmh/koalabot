exports.run = (Discord, client, message, args) => {
var embederrordm = new Discord.RichEmbed()
        .setTitle('${message.author.username}s avatar:')
        .setImage(${message.author.avatar})
        .setFooter('Koala Bot | Made by Aaron')
        .setColor('#000000');
message.reply('Here is your avatar:');
message.channel.send(${message.author.avatar});
message.channel.sendEmbed(embederrordm);
}
