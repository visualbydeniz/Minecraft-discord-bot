module.exports = {
    async run (client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');
        const embed = new MessageEmbed()
            .setTitle(`> Our Social Media Accounts`) // // Title of the embed message

            // // Replace the links below with your own project or server's official pages
            .addField(`YouTube`, `>  [__Click here__](https://www.youtube.com/@pixelcraft4765/featured)`)
            .addField(`Instagram`, `>  [__Click here__](https://www.instagram.com/pixelcraft/)`)
            .addField(`TikTok`, `>  [__Click here__](https://www.tiktok.com/@pixelcraft)`)
            .addField(`Twitter`, `>  [__Click here__](https://twitter.com/pixelcraft_mc)`)
            .addField(`Twitch`, `>  [__Click here__](https://www.twitch.tv/pixelcraft)`)

            // // Optional: You can use your own custom logo and banner image here
            .setColor('YELLOW')
            .setThumbnail(``) // // Replace with your logo URL
            .setImage(``) // // Replace with a banner or showcase image

            .setTimestamp()
            .setFooter('PixelCraft Bot', client.user.avatarURL()) // // Name of your bot shown in footer
        message.channel.send(embed);
        message.react("✅"); // // Adds a green check emoji reaction
    }
}

module.exports.config = {
    name: "socialmedia", // // Command trigger: !socialmedia
    desc: "Displays the server's social media account links.",
    aliases: ["socialmedia", "socials"] // // Additional aliases for flexibility
};
