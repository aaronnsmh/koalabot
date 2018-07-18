const request= require('request');
	  const rbx= require('noblox.js');
	  exports.run = async (Discord, client, message, args) => {
		  request('https://verify.eryn.io/api/user/' + message.author.id, { json: true }, (err, res, body) => {
              if (err || body.robloxUsername == null) {
                    return message.channel.send("Hi there, welcome to the Koala Cafe Discord. Please go to https://verify.eryn.io, verify your roblox account and then run this command again.");              
              } else { 
                    message.member.setNickname(body.robloxUsername).catch(function(err){ 
				message.channel.send(`Error: I was not able to update your discord nickname.`)
			    	const newname = body.robloxUsername;
			});
                    message.member.addRole(message.guild.roles.find("name", "Verified")).catch(function(err){ 
				message.channel.send(`Error: I was not able to give you the verified role.`)
			});
					rbx.getRankNameInGroup(937709,body.robloxId).then(data => {
						rbx.getRankInGroup(937709,body.robloxId).then(data1 => {
							let RankForGroup = message.guild.roles.find("name",data);
							message.member.addRole(RankForGroup).catch(function(err){ 
				message.channel.send(`Error: I was not able to update your discord role.`)
			});
	
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`${message.author.tag}, your Discord annount has been updated with the following infomation.`)
							    .setTitle('Roblox Verification')
							    .addField('Username',body.robloxUsername,true)
							    .addField('ID',body.robloxId,true)
							    .addField('Rank',data,true)
							    .setThumbnail("https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + body.robloxId);
							message.channel.send({embed})
					})
					})
                }
        });
	
	
  }
