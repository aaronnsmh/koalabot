exports.run = (Discord, client, message, args) => {


       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("wot u doin? this command is for kewl ppl only (If you think this is wrong, make sure you have the administrator discord permission)")
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#e8a60d")
		   .setThumbnail("http://prntscr.com/jaxjif")
		   .setTitle("KOALA AWARDS: Details")
		   .setDescription("The 1st annual Koala Awards are happening tomorrow, and we're excited to be celebrating our achivments with you. Below are some details about the awards as well as infomation on where to buy tickets!")
		   .setFooter("SATURDAY, 4/28 5:00PM EASTERN")
		   .addField("Date","Saturday, 4/28")
		   .addField("Time","5:00PM Eastern Time")
		   .addBlankField(true)
		   .addField("Tickets","Entry is free, but VIP tickets can be purchased either in-game or at the group store!")
		   .addField("Stage Steats","https://www.roblox.com/catalog/1665320265/Koala-Awards-Stage-Seats")
		   .addField("Balcony Seats","https://www.roblox.com/catalog/1665321683/Koala-Awards-Balcony-Seating")
		   .addField("Front Row Seats","https://www.roblox.com/catalog/1665327124/Koala-Awards-Front-Row-Seating")
		   message.channel.send("```fix\n 1st Koala Awards\n ```");
		   message.channel.send({embed})
	   
}
