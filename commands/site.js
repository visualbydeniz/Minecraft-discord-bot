module.exports = {
    async run(client, message, args) {
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
            .setTitle(`> Our Website`)
            .addField(`** **`, `> [__Click here__](https://example.com/)`) // Replace with a non-branded or personal domain
            .setColor('YELLOW')
            .setThumbnail(``) // Optional: Replace this image with your own branding
            .setImage(``) // Optional: Replace or remove
            .setTimestamp()
            .setFooter('Community Bot', client.user.avatarURL()); 

        message.channel.send(embed);
        message.react("✅");
    }
};

module.exports.config = {
    name: "site",
    desc: "Website link",
    aliases: ["site"]
};
 
