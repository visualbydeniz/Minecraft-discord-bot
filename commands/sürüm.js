module.exports = {
  async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    const embed = new MessageEmbed()
      .setTitle(`> Supported Versions`) // // Title of the embed
      .addField(`** **`, `**> 1.16 - 1.18**`) // // Versions that can connect to the server
      .addField(`>  **Recommended Version →  1.17.1 Optifine**`, `** **`) // // Recommended version to use
      .setColor('YELLOW')
      .setThumbnail(`https://cdn.discordapp.com/attachments/1083829077774966787/1085197496617283604/blokolikkkk.png`) // // You can replace this image with your own branding
      .setImage(`https://cdn.discordapp.com/attachments/860830300560293911/1085613102751567912/blokolik22.png`) // // Background image/banner (also replaceable)
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