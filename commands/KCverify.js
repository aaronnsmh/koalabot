exports.run = (Discord, client, message, args) => {

const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail('http://thewindowsclub.thewindowsclubco.netdna-cdn.com/wp-content/uploads/2016/04/windows-update-error.png')
       .setAuthor("Koala Verification")
		   .setTitle("Uh Oh!")
       .setDescription("It looks like you're trying to use a command that is still a W.I.P, to verify or getrole, please type something in #verify or say !verify.")
       .setImage(doMagic8BallVoodoo())
		   .setFooter("Koala Bot | Made by Aaron#1742")
		   .setTimestamp()
		   message.channel.send({embed})
}
