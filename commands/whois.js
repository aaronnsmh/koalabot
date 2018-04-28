

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let reason = args.slice(0).join(" ");
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	let username = body.robloxUsername;
    	console.log(body.username)
	message.channel.send(message.author.id)
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":frame_photo: Name:" +  username)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
}
