exports.run = (Discord, client, message, args) => {

function doMagic8BallVoodoo() {
    var rand = [':8ball: It is certain',':8ball: As I see it, yes',':8ball: It is decidedly so',':8ball: Without a doubt',':8ball: Yes definitely',':8ball: You may rely on it',':8ball: Most Likely',':8ball: Outlook good',':8ball: Yes',':8ball: Signs point to yes',':8ball: Reply hazy try again',':8ball: Ask again later',':8ball: Better not tell you now',':8ball: Cannot predict now',':8ball: Concentrate and ask again',':8ball: Do not count on it',':8ball: My reply is no',':8ball: My sources say no',':8ball: Outlook not so good',':8ball: Very doubtful'];

    return rand[Math.floor(Math.random()*rand.length)];
}

    message.channel.sendMessage(doMagic8BallVoodoo())
    
}
