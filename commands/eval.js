
exports.run = (Discord, client, message, args) => {

  const args = message.content.split(" ").slice(1);

 
    if(message.author.id === '281060171730649089'{
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  });
    else return;
}
