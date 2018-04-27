
exports.run = (Discord, client, message, args) => {
if(message.mentions.users.first()) { //Check if the message has a mention in it.
          let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let robloxname = body.robloxUsername;
          let userid = body.robloxId;
          let author = message.author;
          let url = "https://verify.eryn.io/api/user/" + message.author);
          message.channel.send(url)
          
    const superagent = require("superagent");
module.exports.run = async (bot, Discord, client, message, args) => {
    let {body} = await superagent
    .get(`url`);
    console.log(body.robloxUsername)
}
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setTitle(":frame_photo: Name:" +  robloxname)
		   .setFooter("Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
          
    } else {
          message.reply("Please tag a user!"); //Reply with a mention saying "Invalid user."
    }
}

