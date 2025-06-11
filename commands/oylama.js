const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) 
    return message.reply('**You don’t have permission to use this command!**');

  message.delete();

  let pollQuestion = args.slice(0).join(" ");
  if (!pollQuestion) 
    return message.channel.send("**You must provide a __question__ to start a poll!**");

  let embed = new Discord.MessageEmbed()
    .setFooter('Community Bot', client.user.avatarURL()) // // or 'Bot Assistant', customizable
    .setColor("YELLOW")
    .setTitle("> **__Poll Time!__**")
    .setTimestamp()
    .setDescription(`**
${pollQuestion}

React with one of the emojis below to vote.
**`);

  message.channel.send(embed).then(async m => {
    await m.react("👍");
    await m.react("👎");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.config = {
  name: "poll",
  desc: "start a poll",
  aliases: ["poll"]
};