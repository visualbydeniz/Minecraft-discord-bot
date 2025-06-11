const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const username = message.author.username;
  const avatar = message.author.avatarURL();
  const locationFlag = ":globe_with_meridians:"; // // Previously :flag_tr:, now neutral
  const ping = `${Date.now() - message.createdTimestamp} ms`;

  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .addField("Ping:", ping)
    .addField("Location:", locationFlag)
    .setFooter(`Requested by ${username}`, avatar)
    .setTimestamp();

  message.channel.send(embed);
};

module.exports.config = {
  name: "ping",
  desc: "Shows bot latency",
  aliases: ["ping", "ms"]
};