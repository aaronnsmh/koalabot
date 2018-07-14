const request= require('request');
	  const rbx= require('noblox.js');
	  exports.run = async (Discord, client, message, args) => {
		  request('https://verify.eryn.io/api/user/' + message.author.id, { json: true }, (err, res, body) => {
              if (err || body.robloxUsername == null) {
                    return message.channel.send("Hey there, :wave:! It looks like you're new around here. Please go to https://verify.eryn.io, verify and then try again!");              
              } else { 
                    message.member.setNickname(body.robloxUsername);
                    message.member.addRole(message.guild.roles.find("name", "Verified"));
					rbx.getRankNameInGroup(937709,body.robloxId).then(data => {
						rbx.getRankInGroup(937709,body.robloxId).then(data1 => {
							let RankForGroup = message.guild.roles.find("name",data);
							message.member.addRole(RankForGroup)
							message.reply('Your roles have been updated, have a great day!')
					})
					})
                }
        });
	
	
  }
