exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
    var rand = ['https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg'],['https://i.ytimg.com/vi/1R-QFQGWYuc/maxresdefault.jpg'],['https://www.australia.com/content/australia/en_ie/news/2016/may/Top-5-places-to-see-Koalas-in-the-wild/jcr:content/mainParsys/imagewithbutton/mainImageSrc.adapt.1620.medium.jpg'],['https://koala.net/images/wildlife/koala_joey.jpg'],['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4KljWuH1XTidik7OijfHNCDdcD6pLMMhQ_x8e4pn48KrK5YH'],['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFTNzW_fG0PKI3gdO7Jb67amwsji7C9rmt9JZi0ah04EvckX_'],['http://www.slate.com/content/dam/slate/articles/health_and_science/pandemics/2012/12/121204_PAN_Koalas.jpg.CROP.rectangle3-large.jpg'],['https://www.natgeokids.com/wp-content/uploads/2015/01/Koala-facts-3.jpg'];

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
