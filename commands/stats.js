const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const uptime = moment
    .duration(client.uptime)
    .format(" D [day], H [hour], m [minute], s [second]");

  const stats = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTimestamp()
    .setFooter("PixelCraft", client.user.avatarURL()) // // Bot name or project footer
    .addField("» **Bot Owner**", "<@1083839890388684820>") // // Replace with your Discord ID if needed

    // // Ping info: latency and API delay
    .addField(
      "» **Latency**",
      "Message Latency: {ping1} ms \nBot Latency: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),
      true
    )

    // // Memory usage (heap)
    .addField(
      "» **Memory Usage**",
      (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",
      true
    )

    // // Uptime
    .addField("» **Uptime**", uptime, true)

    // // Total users
    .addField(
      "» **Users**",
      client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )

    // // Total guilds
    .addField(
      "» **Servers**",
      client.guilds.cache.size.toLocaleString(),
      true
    );

  return message.channel.send(stats);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

module.exports.config = {
  name: "stats", // // English command name
  desc: "Displays bot statistics.",
  aliases: ["stats", "info", "istatistik"] // // Turkish alias kept optionally
};