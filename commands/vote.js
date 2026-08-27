module.exports = {
    async run(client, message, args) {
        const { MessageEmbed, Message } = require('discord.js');
        
        const embed = new MessageEmbed()
            .setTitle(`> Vote for Our Server`) 
            .addField(`** **`, `>  [__Click here__](https://your-minecraft-vote-page)`) 
            

            .setColor('YELLOW')
            .setThumbnail(``)
      

            .setImage(``)


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

    
