module.exports = {
    async run (client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');  
        const embed = new MessageEmbed()
            .setTitle(`> World Map Link`)
            .addField(`** **`, `>  [__Click Here__](http://yourmapdomain.com:4004/#world;flat;6144,64,-2048;1)`)
            .setColor('YELLOW')
            .setThumbnail(`https://yourdomain.com/your-thumbnail.png`) // Replace with your own brand thumbnail
            .setImage(`https://yourdomain.com/your-map-image.png`) // Replace with your own brand image
            .setTimestamp()
            .setFooter('YourBotName', client.user.avatarURL()); // Replace 'YourBotName' accordingly
        
        message.channel.send(embed);
        message.react("✅");
    }
}

module.exports.config = {
    name: "map",
    desc: "Displays the server map",
    aliases: ["map"]
} 

    