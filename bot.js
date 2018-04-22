const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'KC';
const db = require('quick.db');
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const talkedRecently = new Set();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setPresence({ activity: { name: 'at Koala Cafe!' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});

client.on('ready', () => {
    console.log('Koala Bot is ONLINE. No bugs found at this time.');

});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('message', message => {    
    if (message.mentions.members.firstKey() === '436253576537440256') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:')
}
    
    
    let sender = message.author;
    
    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things our guild (server). Please join our server (code: https://discord.gg/FtYeKMu) to use the bot! **")
        return;
    }
    
    if (message.mentions.members.firstKey() === '422393536420511752') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry:')
    }

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;
        
        try {
            if (talkedRecently.has(message.author.id))
        return;
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);
            talkedRecently.add(message.author.id);
setTimeout(() => {
            talkedRecently.delete(message.author.id);
}, 2500);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`);

        }
    })

client.on('guildMemberAdd', member => {
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© Koala Bot | Made by Aaron #1742")
        .setColor(randomColor)
        .setTitle(":wave: Welcome")
        .addField("Rules","Please make sure to read the rules, they are located in #rules")
        .addField("Verify","To access all channels in the server, please verify your Roblox account in #verify")
        .setDescription("Welcome to the Koala Cafe server!")
     member.sendEmbed(embedinfo);
       console.log(`${member.user.username} has joined`);
});

////////////////////////////////////////////////////////////



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
