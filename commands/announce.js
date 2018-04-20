exports.run = (Discord, client, message, args) => {

if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setAuthor(author)
		   .setTitle(":mega: Announcement:")
		   .setDescription(text);
		   message.channel.send("Announcement from" + author);
		   message.channel.send({embed})
	   }
}
