exports.run = (Discord, client, message, args) => {

let sender = message.author;
let allowedRole = message.guild.roles.find("name", "bot admin");

       if(message.member.roles.has(allowedRole.id)) {
        const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
        
       } else {
         message.channel.send("wot u doin? this command is for kewl ppl only (If you think this is wrong, make sure you have the 'bot admin` discord role)")
         message.delete()
         .then(m=>m.delete(10000))
       }
}
