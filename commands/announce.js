exports.run = (Discord, client, message, args) => {

       let allowedRole = message.guild.roles.find("name", "Announce Permissions");
if(!message.member.roles.has(allowedRole.id)) return message.channel.send("You have invalid permissions!")
		   const color = args[0]
		   let title = args[0];
		   const text = args.slice(0).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(client.user.avatarURL)
		   .setTitle(":mega: Announcement: ")
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
		   message.delete(10)
		   message.channel.send({embed})
	   
}
