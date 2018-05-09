var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("Here is the help you are looking for:");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("© Koala Bot | Made by Aaron (Arron)")
        .setColor(randomColor)
        .setTitle(" :koala: Koala Cafe Help")
        .setDescription("Looks like you need help! Well you're in for a treat, I am Koala Bot and I am here to help you :heart:")
        .addField("What is koala cafe?", "Life.")
        .addField("Plss help me i need help verifying, please fam :cool: ", "Go to #verify and run !verify.")
        .addField("what the f**k is this bot", "This bot is a bot here for your entertainment, and for moderation comamnds, run KCcmds for more info!")
        .addField("wot is the prefix?", "KC[CMD]")
        .addField("More help coming soon!", "Because you need it.")
    message.channel.sendEmbed(embedcmds);
    message.delete(10000)

}
