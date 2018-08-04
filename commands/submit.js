exports.run = async (Discord, client, message, args, tools) => {
            var reportEmbed = new Discord.RichEmbed()
                .setColor("#ffffff")
                .setAuthor(message.author.avatarURL,message.author)
                .setImage(args[0])
                .setDescription(args.slice(1).join(" "))
            var reportschannel = message.guild.channels.find(`name`, "memories");
            reportschannel.send(reportEmbed);
}
