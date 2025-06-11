module.exports = {
    async run (client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');
        const embed = new MessageEmbed()
            .setTitle(`> PixelCraft Bot Commands`) 
            .addField(`**→ !ip**`, `> *Displays the IP address of the server.*`)
            .addField(`**→ !version**`, `> *Shows the supported Minecraft versions for joining the server.*`)
            .addField(`**→ !wiki**`, `> *Provides the link to the server's wiki page.*`)
            .addField(`**→ !map**`, `> *Displays the live Towny server map.*`)
            .addField(`**→ !site**`, `> *Gives the link to the server’s official website.*`)
            .addField(`**→ !vote**`, `> *Shows the voting page to support the server.*`)
            .addField(`**→ !socialmedia**`, `> *Lists the server’s social media platforms.*`)
            .setColor('YELLOW')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1083829077774966787/1085197496617283604/blokolikkkk.png`)
            // // You can update this with a custom  thumbnail
            .setImage(`https://cdn.discordapp.com/attachments/860830300560293911/1085613102751567912/blokolik22.png`)
            // // Consider replacing with a banner containing your branding
            .setTimestamp()
            .setFooter('Bot', client.user.avatarURL()) 
           
        
        message.channel.send(embed);
        message.react("✅"); // // Adds a confirmation emoji
    }
}

module.exports.config = {
    name: "help",
    desc: "Displays all available commands.",
    aliases: ["help", "yardım"]
}

