exports.run = (Discord, client, message, args) => {
if (message.author.id === '281060171730649089') {
  const sayMessage = args.join(" ");
  client.user.setAvatar(sayMessage);
  }
else {
reply("You're not cool enough to run this command!")
}
}
