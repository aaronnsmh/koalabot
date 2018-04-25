


exports.run = (Discord, client, message, args) => {
 const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle("This command isn't quit purrfect yet and will be coming soon. Meow :cat:")
       .setImage('https://media.discordapp.net/attachments/424892536851529729/438746567810482177/cats-master-header_vp.png')
		   .setTimestamp()
message.channel.send({embed})
}
