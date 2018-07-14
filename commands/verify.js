const request= require('request');
	  const rbx= require('noblox.js');
	  exports.run = async (Discord, client, message, args) => {
		  request('https://verify.eryn.io/api/user/' + message.author.id, { json: true }, (err, res, body) => {
              if (err || body.robloxUsername == null) {
                    return message.channel.send("Hey there, :wave:! It looks like you're new around here. Please go to https://verify.eryn.io, verify and then try again!");              
              } else { 
                    message.member.setNickname(body.robloxUsername);
                    message.member.addRole(message.guild.roles.find("name", "Verified"));
	      }}
