
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
	let avatarurl = "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + id;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":video_game: Get Info")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id + "\n**Profile Link:** \n" + "https://www.roblox.com/users/170493518/" + id)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
	  	   .setImage(avatarurl)
		   message.channel.sendEmbed(embed);
}
