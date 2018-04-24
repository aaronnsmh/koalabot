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
		   .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97vFExM4v0gktH18oMQRdT1NPNySjnyE4YPKWwg7NI_NznOPT")
       .setAuthor(name,thumbnail)
		   .setTitle("Koala")
       .setImage(doMagic8BallVoodoo())
		   .setFooter("Aww! Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send({embed})
    

}
