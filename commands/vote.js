module.exports = {
    async run(client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');
        
        const embed = new MessageEmbed()
            .setTitle(`> Vote for Our Server`) 
            .addField(`** **`, `>  [__Click here__](https://minecraft-mp.com/server/312547/vote/)`) 
            

            .setColor('YELLOW')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1083829077774966787/1085197496617283604/blokolikkkk.png`)
      

            .setImage(`https://cdn.discordapp.com/attachments/860830300560293911/1085613102751567912/blokolik22.png`)


            .setTimestamp()
            .setFooter('PixelCraft Bot', client.user.avatarURL()) 


        message.channel.send(embed);
        message.react("✅") 
    }
}

module.exports.config = {
    name: "vote", 
    desc: "Provides the server vote link.", 
    aliases: ["vote", "oy"] 
}

    