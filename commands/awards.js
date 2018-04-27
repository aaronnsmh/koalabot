exports.run = (Discord, client, message, args) => {


       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("wot u doin? this command is for kewl ppl only (If you think this is wrong, make sure you have the administrator discord permission)")
		   
		   const author = message.author;
		   
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#e8a60d")
		   .setThumbnail("https://lh4.googleusercontent.com/-6D3fVwBHe-TTG7uXUJS0AvqPopJKVFsUStzGacUdANfVszhXYuydMjeNALCukJbqv52L2lMO5GU4w=w1920-h949")
		   .setTitle("Details")
		   .setDescription("The 1st annual Koala Awards are happening tomorrow, and we're excited to be celebrating our achivments with you. Below are some details about the awards as well as infomation on where to buy tickets!")
		   .setFooter("SATURDAY, 4/28 5:00PM EASTERN")
		   .addField("Date","Saturday, 4/28")
		   .addField("Time","5:00PM Eastern Time")
		   .addBlankField(true)
		   .addField("Tickets","Entry is free, but VIP tickets can be purchased either in-game or at the group store!")
		   .addField("Stage Steats","https://www.roblox.com/catalog/1665320265/Koala-Awards-Stage-Seats")
		   .addField("Balcony Seats","https://www.roblox.com/catalog/1665321683/Koala-Awards-Balcony-Seating")
		   .addField("Front Row Seats","https://www.roblox.com/catalog/1665327124/Koala-Awards-Front-Row-Seating")
		   
		  const embedtwo = new Discord.RichEmbed()
		   .setColor("#e8a60d")
		   .setTitle("1ST KOALA AWARDS")
		   .setImage("https://media.discordapp.net/attachments/438401144147017748/439474846733303808/unknown.png")
		   message.channel.sendEmbed(embedtwo)
		   message.channel.send({embed})
	   
}
