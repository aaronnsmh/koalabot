

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let userid = message.mentions.users.first();
	const url = baseurl + userid;
	let {body} = await superagent
	.get(url);
	let username body.robloxUsername
    	console.log(body.username)

          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":frame_photo: Name:" +  username)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
}
