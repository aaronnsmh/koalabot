// ibot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = 'KC';
const { get } = require("snekfetch"); 
const superagent = require("superagent");

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
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry: My prefix is `KC')
   }
   
   

   if (message.mentions.members.firstKey() === '281060171730649089') {
    message.channel.send('Thanks for tagging Aaron! He will get back to you soon!')
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
const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyBxy_f2i6Pk0euSzTYnniAKSvaOLaaH94Y");
const queue = new Map();
client.on('message', async msg => {
     var guildid = msg.guild.id
   let prefix = await db.fetch(`guildPrefix_${guildid}`)
   if (prefix === null) prefix = "!";
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
  let balance = await db.fetch(`balance_${msg.author.id}`)
  if (balance === null) await db.set(`balance_${msg.author.id}`, 0);
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('You need to be in a voice channel to play music');
    if(!args[1]) return msg.channel.send(':no_entry: Please input a song name that you wish to be played');
    const permissions = voiceChannel.permissionsFor(msg.guild.me);
    if (!permissions.has('CONNECT')) {
        return msg.channel.send('I cannot connect to your voice channel, make sure I have the connect permission');
    }
    if (!permissions.has('SPEAK')) {
        return msg.channel.send('I cannot speak in this voice channel, make sure I have the speak permission');
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
        const playlist = await youtube.getPlaylist(url);
        const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
            const video2 = await youtube.getVideoByID(video.id);
            await handleVideo(video2, msg, voiceChannel, true);
        }
        return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
    } else {
        try {
            var video = await youtube.getVideo(url);
        } catch (error) {
            try {
                var videos = await youtube.searchVideos(searchString, 10);
                var video = await youtube.getVideoByID(videos[0].id)

            } catch (err) {
                console.error(err);
                return msg.channel.send('I could not obtain any search results.');
            }
        }
        return handleVideo(video, msg, voiceChannel);
    }
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing');
		serverQueue.connection.dispatcher.end();
    return msg.channel.send(':white_check_mark: Skipped a song for you!');
	} else if (command === 'disconnect' | command === 'dc') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
		return msg.channel.send(':white_check_mark: Disconnected from the voice channel!');
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`); 
	} else if (command === 'pause' | command === 'p') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume' | command === 'r') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send("No song is paused so I can't resume anything");
	}
	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Started playing **${song.title}**`);
}

client.login(process.env.BOT_TOKEN);
