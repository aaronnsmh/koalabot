

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let reason1 = message.mentions.users.first();
	let reason = reason1.id;
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	let username = body.robloxUsername;
	let id = body.robloxId;
	message.channel.send("**Roblox Name: **\n${username}\n**Roblox ID:**\n${id}")
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":video_game: Get Info for:" + reason1)
	  	   .setDescription("**Roblox Name: **\n${username}\n**Roblox ID:**\n${id}")
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
}
