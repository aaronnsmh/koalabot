var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("Commands:");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("© Koala Bot | Made by Aaron (Arron)")
        .setColor(randomColor)
        .setTitle(":book: Koala Cafe Commands :koala: ")
        .setDescription("Wondering what I do? Well you sir/ma'am have a very good question! Read on to see why I am here!")
        .addField(":8ball: 8Ball [QUESTION]", "Responds with what will happen.")
        .addField(":o: cointoss", "Tosses a coin.")
        .addField(":frame_photo: avatar", "Shows a picture of your bootiful avatar!")
        .addField(":loudspeaker: say [STRING]", "The bot says what you ask it to say, well duh.")
        .addField(":fire: kick/ban [USER] [REASON]", "The bot says what you ask it to say, well duh.")
        .addField(":clock1: More CMDS coming soon", "What do you expect me to put here?")
    message.channel.sendEmbed(embedcmds);
    message.delete(10000)

}
