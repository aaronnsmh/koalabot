exports.run = (Discord, client, message, args) => {
const delay = require('delay');
let sender = message.author;
let allowedRole = message.guild.roles.find("name", "bot admin");

       if(message.member.roles.has(allowedRole.id)) {
        const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
    delay(200)
    .then(() => {
        message.delete().catch(O_o=>{});
    });
        
       } else {
         message.channel.send("This command is limited to bot admins only.")
         message.delete()
         .then(m=>m.delete(10000))
       }
}
