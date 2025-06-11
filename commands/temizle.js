const Discord = require('discord.js')

exports.run = (client, message, args) => {
   
    // Check if the user has the required role to execute this command
    if(!message.member.roles.cache.has("860830373708824576")) { 
        const embed = new Discord.MessageEmbed()
        .setDescription(`You don't have permission to use this command!`) // // Türkçesi: Bu komutu kullanmak için gerekli izne sahip değilsin!
        .setColor('RED')
        .setFooter('PixelCraft Bot') 
        .setTimestamp()
        return message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 10000 }) // // Deletes the error message after 10 seconds
        })
        .catch();
    }

    let amount = args[0] // // How many messages to delete

    // If the amount is more than 100 (Discord limitation)
    if(amount > 100){
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, I can delete up to \`100\` messages at once!`)
        .setColor('RED')
        .setFooter('PixelCraft Bot')
        .setTimestamp()
        return message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 10000 }) // // 10 seconds
        })
        .catch();
    }

    // If no amount was provided
    if(!amount){
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, please specify the number of messages to delete!`) // // Türkçesi: Lütfen silinecek mesaj sayısını belirt!
        .setColor('RED')
        .setFooter('PixelCraft Bot')
        return message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
        })
        .catch();
    }

    // If the input is not a number
    if(isNaN(amount)){
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, the amount must be a valid number!`) // // Türkçesi: Silinecek miktar geçerli bir sayı olmalı
        .setColor('RED')
        .setFooter('PixelCraft Bot')
        .setTimestamp()
        return message.channel.send(embed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
        })
        .catch();
    }

    // Main deletion process
    if(amount){
        message.channel.bulkDelete(amount) // // Deletes the messages

        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, successfully deleted ${amount} message(s).`) // // Başarı mesajı
        .setColor('GREEN')
        .setFooter('PixelCraft Bot')
        .setTimestamp()
        return message.channel.send(embed).then(cmf => {
            cmf.delete({ timeout: 5000 }) // // Deletes the confirmation message after 5 seconds
        })
    }
}

module.exports.config = {
    name: "clear", 
    desc: "Bulk message deletion command.", 
    aliases: ["clear", "temizle", "sil"] 
}