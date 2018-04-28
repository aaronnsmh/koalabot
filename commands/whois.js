

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
	let baseurl2 = "https://www.roblox.com/bust-thumbnail/json?userId="
    	let reason1 = message.mentions.users.first();
	let reason = reason1.id;
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	const url2 = baseurl + body.robloxId + "&height=180&width=180";
	let {avatar} = await superagent
	.get(url2)
	let username = body.robloxUsername;
	let id = body.robloxId;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":video_game: Get Info")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
	  	   .setThumbnail(avatar.url)
		   message.channel.sendEmbed(embed);
}
