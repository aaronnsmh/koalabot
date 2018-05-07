const Discord = require('discord.js')

exports.run = async (Discord, client, message, args) => {
  if (!args) return message.reply("You must supply 3 games to choose from!")
  
    
  var admin= new Discord.RichEmbed()
        .setTitle("Poll: " + "What game do you want to play?")
        .setDescription("React below with 1, 2 or 3!")
        .addField("Vote 1:", args[1])
        .addField("Vote 2:", args[1])
        .addField("Vote 3:", args[1])
        .setFooter("Poll requested by: " + message.author.id + " at: ")
        .setTimestamp()
    message.channel.sendEmbed(admin);
    const pollTopic = await message.channel.sendEmbed(admin);
    pollTopic.react(`:one:`);
    pollTopic.react(`:two:`);
    pollTopic.react(`:three:`);
};
