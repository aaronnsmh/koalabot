var roblox = require('noblox.js');
exports.run = async (Discord, client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
  let pw = process.env.password
  let un = process.env.username
  let gid = parseInt(process.env.group);
  let mr = parseInt(process.env.rank);
  let staffc = message.guild.channels.find("name", "logs")	
  var groupId = gid; //replace with stored stuff from earlier
  var maximumRank = mr; //replace with stored stuff from earlier
  
  await roblox.login({username: un, password: pw}).catch(() => {console.log("Failed to login.");});


    let shoutmessage = "Hello! Interviews will be hosted today at 5PM Eastern Time! Want to purchase an in-game rank? They are available inside the middle of the cafe, in front of the counters!";
    roblox.shout({group: groupId, message: shoutmessage}).then(randomvar => {
      message.channel.send('Group shout posted').catch(e => console.error('ERROR AT LINE 18\n' + e))
      const embed = new Discord.RichEmbed()
        .setColor(0x8cff00)
        .setTimestamp()
        .setDescription(`**Action:** Group Shout\n**Shout Message:** `);
      staffc.send({embed}).catch(e => console.error('ERROR AT LINE 23\n' + e))
    }).catch(e => {
      message.channel.send('Failed to shout.\n'+e.stack).catch(e => console.error('ERROR AT LINE 25\n' + e))
    });
  
  return;
}
