// ibot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = 'KC';
const { get } = require("snekfetch"); 

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity(' over Koala Cafe | KChelp', { type: 'WATCHING' });
    client.user.setStatus("online");
});



client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in the Koala Cafe server). The comamnd prefix is 'KC' **")
        return;
    if(message.content == '.') {
       let user = message.author;
       let reason = args.slice(1).join(" ");
       let staffc = message.guild.channels.find("name", "logs")
       const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
        staffc.send({embed});
        message.channel.send(`**${user.tag}** has been warned successfully for ${reason}`);
        user.send(`You've been warned in Koala Cafe for **${reason}** by ${message.author.tag}! Tut tut...`);
}
}
    

   
   
   if (message.mentions.members.firstKey() === '436253576537440256') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry: My prefix is `KC`(thanks to SuperRussia for the idea)')
   }
   


        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;
        
        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ${message.author.id} ran the command: ${cmd} probably unsuccsesfully!`);

        }
    })


client.login(process.env.BOT_TOKEN);
