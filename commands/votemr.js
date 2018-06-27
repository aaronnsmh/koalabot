var roblox = require('noblox.js')
const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
name = args[0]
let id = await roblox.getIdFromUsername(name)

	  let id2 = id
	let avatarurl = "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + id2;
	let rig = await roblox.getRankNameInGroup(937709, id2)
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
       .setTitle(args[0])
	  	 .setDescription("**Profile Link:** \n" + "https://www.roblox.com/users/" + id + "\n**Rank In Group:**\n" + rig)
		   .setFooter("React with ✅ or ⛔")
	  	   .setThumbnail(avatarurl)
     const pollTopic = await message.channel.sendEmbed(embed);
    pollTopic.react(`⛔`);
    pollTopic.react(`✅`);
	        

}
