exports.run = (Discord, client, message, args) => {
try {
			get('https://aws.random.cat/meow').then(res => {
				return message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[2]}`}]});
			});
		} 
}
