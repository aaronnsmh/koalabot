exports.run = (Discord, client, message, args) => {

function doMagic8BallVoodoo() {
    var rand = [':rocket: Rock!', ':paperclip: Paper!', ':scissors: Scissors!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

    message.channel.sendMessage(doMagic8BallVoodoo())
    
}
