const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "**You need `Manage Messages` permission to use this command!**"
    );

  if (!message.member.voice.channel)
    return message.reply(
      "**You must be in a voice channel to use this command!**"
    )
    .then(msg => {
      msg.delete({ timeout: 10000 }); // 10 seconds
    })
    .catch();

  let reward = args.slice(0).join(" ");
  if (!reward)
    return message.reply("**You must specify a reward!**")
      .then(msg => {
        msg.delete({ timeout: 10000 });
      })
      .catch();

  let members = message.member.voice.channel.members.map(member => member.id);
  const winner = members[Math.floor(Math.random() * members.length)];

  let embed = new Discord.MessageEmbed()
    .setTitle("🎉 Voice Giveaway Result")
    .setColor("RED")
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      `**Winner: <@${winner}>\nHosted by: ${message.author}\nReward: \`${reward}\`**`
    )
    .setFooter("Giveaway Bot", client.user.avatarURL()) // 
    .setTimestamp();

  message.channel.send(embed);
};

module.exports.conf = {
  aliases: ["voicegiveaway"]
};

module.exports.config = {
  name: "voicegiveaway",
  desc: "Randomly selects a user from your voice channel",
  aliases: ["sesçekiliş", "voicegiveaway"]
};