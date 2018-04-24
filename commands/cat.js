


exports.run = (Discord, client, message, args) => {
	const { body } = await superagent
	   .get('aws.random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Meow :cat:")
	   .setImage(body.file)
message.channel.send({embed})

}
