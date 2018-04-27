
    const superagent = require("superagent");
module.exports.run = async (Discord, client, message, args) => {
    let {body} = await superagent
    let id = args.slice(0).join(" ");
    let url = "https://verify.eryn.io/api/user/" + id
    .get(`url`);
    console.log(body.robloxUsername)

          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":frame_photo: Name:" +  body.robloxUsername)
		   .setFooter("Requested by " + message.author.id + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
          
}

