

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let {body} = await superagent
	let baseurl = "https://verify.eryn.io/api/user/"
    	let userid = message.mentions.users.first();
	let url = baseurl + userid
    	.get(url);
    	console.log(body.robloxUsername)

          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":frame_photo: Name:" +  body.robloxUsername)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
}
