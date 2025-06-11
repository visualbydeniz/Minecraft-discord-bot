const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let complaint = args.slice(0).join(' ');
    message.delete();

    // // If no complaint is provided, send usage info
    if (complaint.length < 1) return message.channel.send(    
        new Discord.MessageEmbed()
        .setDescription('Usage: !report <your complaint here>') // // Türkçesi: Kullanım: !şikayet <Şikayet>
    )
    .then(msg => {
        msg.delete({ timeout: 10000 }) // // Deletes usage message after 10 seconds
    })
    .catch();

    // // Sends confirmation message to user
    const userConfirmation = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setDescription('Your report has been submitted! Our moderators will review it shortly.') // // Türkçesi: Şikayetiniz bildirildi...
    message.channel.send(userConfirmation)
    .then(msg => {
        msg.delete({ timeout: 10000 }) // // Deletes confirmation message after 10 seconds
    })
    .catch();

    // // Sends detailed report to a specific admin/moderator channel
    const adminNotification = new Discord.MessageEmbed()
        .setColor("#e74c3c")
        .setDescription(`Report submitted by **${message.author.tag}**:`)
        .addField(`User Information`, `User ID: ${message.author.id}\nUsername: ${message.author.username}\nTag: ${message.author.discriminator}`)
        .addField("Report", complaint)
        .setThumbnail(message.author.avatarURL());

    client.channels.cache.get('').send(adminNotification); 
    // // The channel ID should be customized. This ID is the channel where admins will see complaints.
    // // Kanal ID’si özelleştirilmeli. Bu ID, adminlerin şikayetleri göreceği kanal.
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'report'
};

module.exports.config = {
    name: "report",
    desc: "Submit a complaint to the server staff",
    aliases: ["report", "şikayet"]
};