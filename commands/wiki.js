module.exports = {
    async run (client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');
        const embed = new MessageEmbed()
            .setTitle(`> Our Wiki Page`) // // Title of the embed message
            .addField(`** **`, `>  [__Click here__](https://wiki.xxxcraft.com/)`) 


            .setColor('YELLOW')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1083829077774966787/1085197496617283604/blokolikkkk.png`)
            // // Thumbnail image, consider updating to a custom PixelCraft logo

            .setImage(`https://cdn.discordapp.com/attachments/860830300560293911/1085613102751567912/blokolik22.png`)
            // // Header or showcase image, replace with your custom banner

            .setTimestamp()
            .setFooter('PixelCraft Bot', client.user.avatarURL()) 
            // // Footer branding changed from 'Blokolik Bot' to 'PixelCraft Bot'
        
        message.channel.send(embed);
        message.react("✅"); // // Adds a check emoji reaction to confirm the command ran
    }
}

module.exports.config = {
    name: "wiki",
    desc: "Provides the link to the server's wiki page.",
    aliases: ["wiki"]
}

    