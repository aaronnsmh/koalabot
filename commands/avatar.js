
exports.run = (Discord, client, message, args) => {
  var message = '';
if (m.content.startsWith("!avy")) {
    if (m.content.indexOf(' ') !== -1) {
        if (m.mentions) {
            for (var user of m.mentions) {
                message += user.avatarURL + '\n';
            }
            message.slice(0, -2);
            bot.sendMessage(m.channel, message);
        } else {
            message = m.author.avatarURL;
            bot.sendMessage(m.channel, message);
        }
    } else {
        message = m.author.avatarURL;
        bot.sendMessage(m.channel, message);
    }
}
