const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

const PREFIX = '!';
client.commands = new Discord.Collection();

client.once('ready', async () => {
  console.log(`Bot ${client.user.tag} is now online.`);
  client.user.setActivity('www.PixelCraft.com', { type: 'PLAYING' });
  await loadCommands();
});

async function loadCommands() {
  const commandFiles = fs.readdirSync('./commands');
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.config.name, command);
  }
}

client.on('message', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) ||
                  client.commands.find(cmd => cmd.config.aliases.includes(commandName));

  if (!command) return;

  try {
    command.run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error executing this command.');
  }
});

// Basic responses to common greetings
client.on('message', msg => {
  if (msg.author.bot) return;
  const content = msg.content.toLowerCase();
  const greetings = {
  'sa': 'Aleykum selam, welcome! 😊',
  'hello': 'Hello, welcome! 😊',
  'Good morning': 'Good morning! 😊',
  'hi': 'Hi there, welcome! 😊',
  'Good night': 'Good night, see you soon! 🌙',
  'selamın aleyküm': 'Aleykum selam, welcome! 😊',
  'Greetings': 'Greetings, welcome! 😊'
};

  if (greetings[content]) {
    msg.channel.send(greetings[content]);
  }

  if (msg.content === `<@${client.user.id}>`) {
    msg.reply(`My prefix is: **${PREFIX}**`);
  }
});





require('dotenv').config();
client.login(process.env.TOKEN);
 // Token must be stored securely (e.g., in .env file)





  
  
      
      
































































client.login('');
