

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
	let baseurl2 = "https://www.roblox.com/bust-thumbnail/json?userId="
	let endurl = "&height=180&width=180"
    	let reason1 = message.mentions.users.first();
	let reason = reason1.id;
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	let id = body.robloxId;
	const url2 = baseurl + id + endurl;
	let {avatar} = await superagent
	.get(url2)
	let username = body.robloxUsername;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":video_game: Get Info")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
	  	   .setThumbnail(avatar.Url)
		   message.channel.sendEmbed(embed);
}
