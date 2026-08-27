module.exports = {
  async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    const embed = new MessageEmbed()
      .setTitle(`> Supported Versions`) // // Title of the embed
      .addField(`** **`, `**> 1.16 - 1.18**`) // // Versions that can connect to the server
      .addField(`>  **Recommended Version →  1.17.1 Optifine**`, `** **`) // // Recommended version to use
      .setColor('YELLOW')
      .setThumbnail(``) // // You can replace this image with your own branding
      .setImage(``) // // Background image/banner (also replaceable)
      .setTimestamp()
      .setFooter('PixelCraft Bot', client.user.avatarURL()) // // Changed from 'Blokolik Bot' to 'PixelCraft Bot'
    
    message.channel.send(embed);
    message.react("✅"); // // Adds a checkmark reaction after sending
  }
}

module.exports.config = {
  name: "version", // // English command name
  desc: "Displays supported Minecraft versions.",
  aliases: ["version", "sürüm"] // // Both English and Turkish command aliases
}
