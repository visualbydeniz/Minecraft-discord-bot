module.exports = {
    async run (client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) 
            return message.reply('**You do not have permission to use this command!**');
        
        const { MessageEmbed, Message } = require('discord.js');  
        const embed = new MessageEmbed()
            .setTitle(`*xxxcraft Moderation Commands*`) // // Title updated
            .addField(`**→ !clear / !temizle**`, `> *Deletes the specified number of messages from the channel.*`, true)
            .addField(`**→ !voicegiveaway / !sesçekiliş**`, `> *Quickly hosts a giveaway among users in your current voice channel.*`, true)
            .addField(`**→ !vote / !oylama**`, `> *Starts a vote/poll in the channel.*`, true)
            .setColor('RED')
            .setTimestamp()
            .setFooter('Bot', client.user.avatarURL()); // // Footer branding updated
        
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "mhelp",
    desc: "Displays moderation commands.",
    aliases: ["mhelp", "myardım"]
}