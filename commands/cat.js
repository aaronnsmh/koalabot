
exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
   var rand = ['https://i.imgur.com/WQ5V8Rd.jpg', 'https://i.imgur.com/ZgHOitF.jpg', 'https://i.imgur.com/m3P3vwk.gif', 'https://i.imgur.com/WLMGXBh.gif', 'https://i.imgur.com/VEbyKim.jpg', 'https://i.imgur.com/VEbyKim.jpg'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
       .setAuthor(name,thumbnail)
		   .setTitle("Meow :cat:")
       .setImage(doMagic8BallVoodoo())
		   .setFooter("Aww! Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send({embed})
    

}
