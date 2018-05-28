var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {;
if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Only MR/HR can rank people!")
var groupId = 937709;
var maximumRank = 255;
let staffc = message.guild.channels.find("name", "promotion-logs") 

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not passable.`)
					} else {
						let rank = 4;
						roblox.setRank(groupId, id, rank)
						
						.then(function(roles){
							message.channel.send(`Passed user ${username}, rank changed from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Pass\n**Target:** ${username}\n**User:** ${message.author.tag}\n**Old Rank:** ${roles.oldRole.Name}\n**New Rank:** ${roles.newRole.Name}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to pass.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}
