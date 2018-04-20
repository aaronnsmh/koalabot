var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
if(message.mentions.users.first()) { //Check if the message has a mention in it.
          let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let output = user.username + user.discriminator /*Username and Discriminator*/ +
          let userpic = user.avatarURL;
          let username = user.username;
          "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
          /*message.channel.sendMessage(output); //We send the output in the current channel.*/
          
          var embedcmds= new Discord.RichEmbed()
        .setFooter("© Koala Bot | Made by Aaron (Arron)")
        .setColor(randomColor)
        .setTitle(username)
        .setImage(userurl)
          message.channel.sendEmbed(embedcmds);
          
    } else {
          message.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
}
