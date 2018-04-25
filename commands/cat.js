


exports.run = (Discord, client, message, args) => {
message.channel.send(`This command isn't quit purrfect yet and will be coming soon. Meow :cat: `)
 const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle("This command isn't quit purrfect yet and will be coming soon. Meow :cat:")
       .setImage('http://1.bp.blogspot.com/-0WagJ8BL5WU/U5UKkIPfJ6I/AAAAAAAAB1c/BOpklEXhEWY/s1600/Quasi.jpg')
		   .setTimestamp()
message.channel.send({embed})
}
