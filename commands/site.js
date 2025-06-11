module.exports = {
    async run(client, message, args) {
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
            .setTitle(`> Our Website`)
            .addField(`** **`, `> [__Click here__](https://example.com/)`) // Replace with a non-branded or personal domain
            .setColor('YELLOW')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1083829077774966787/1085197496617283604/blokolikkkk.png`) // Optional: Replace this image with your own branding
            .setImage(`https://cdn.discordapp.com/attachments/860830300560293911/1085613102751567912/blokolik22.png`) // Optional: Replace or remove
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
 