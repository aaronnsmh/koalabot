var roblox = require('noblox.js')
exports.run = async (Discord, client, message, args) => {
	let name = args[2];
	if (!name) 
		return message.reply('Please enter a username.');
  roblox.getIdFromUsername(name)
  .then(function(id){
				roblox.getRankInGroup(937709, id)
			        
				.then(function(rank){
        message.channel.send(name+"'s rank: **"+rank+"**")
});
});
}
