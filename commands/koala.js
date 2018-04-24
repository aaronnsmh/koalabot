exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
    var rand = ['https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
       .setAuthor(name,thumbnail)
		   .setTitle("Koala")
       .setImage(doMagic8BallVoodoo())
		   .setFooter("Aww! Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send({embed})
    

}
