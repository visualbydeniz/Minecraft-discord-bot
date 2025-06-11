module.exports = {
  async run(client, message, args) {
    const { MessageEmbed } = require('discord.js');
    const embed = new MessageEmbed()
      .setTitle('> Server IP Information')
      .addField('** **', '> play.example-server.com / join.example-server.com') // Replaced domain with a neutral sample
      .addField('** **', '> Bedrock Port → 19132')
      .setColor('YELLOW')
      .setThumbnail('https://cdn.discordapp.com/attachments/your_channel_id/thumbnail.png') // Replace with your own asset
      .setImage('https://cdn.discordapp.com/attachments/your_channel_id/banner.png') // Replace with your own asset
      .setTimestamp()
      .setFooter('Example Bot', client.user.avatarURL());
    message.channel.send(embed);
    message.react('✅');
  }
};

module.exports.config = {
  name: 'ip',
  desc: 'Displays server IP addresses',
  aliases: ['ip']
};