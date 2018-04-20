
exports.run = (Discord, client, message, args) => {
  let avataruser = message.mentions.members.first();
  message.reply(message.mentions.members.first().avatarURL);
}
