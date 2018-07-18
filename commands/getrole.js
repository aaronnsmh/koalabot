const request= require('request');
	  const rbx= require('noblox.js');
	  exports.run = async (Discord, client, message, args) => {
		  request('https://verify.eryn.io/api/user/' + message.author.id, { json: true }, (err, res, body) => {
              if (err || body.robloxUsername == null) {
                    return message.channel.send("Hi there, welcome to the Koala Cafe Discord. Please go to https://verify.eryn.io, verify your roblox account and then run this command again.");              
              } else { 
                    message.member.setNickname(body.robloxUsername).catch(function(err){ 
				message.channel.send(`I am unable to update your nickname.`)
			});
                    message.member.addRole(message.guild.roles.find("name", "Verified")).catch(function(err){ 
				message.channel.send(`I was unable to give you the verified role.`)
			});
					rbx.getRankNameInGroup(937709,body.robloxId).then(data => {
						rbx.getRankInGroup(937709,body.robloxId).then(data1 => {
							let RankForGroup = message.guild.roles.find("name",data);
							message.member.addRole(RankForGroup).catch(function(err){ 
				message.channel.send(`I was unable to update your role.`)
			});
							message.reply('Your account has been updated, have a great day.!')
					})
					})
                }
        });
	
	
  }
