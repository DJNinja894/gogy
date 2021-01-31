const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODA1Mjk0NTY3ODU4MzcyNjA4.YBYzAg.hgUv2Q7xb-p6kWGRZIYBoTj1awQ';

const prefix = "/";

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}


bot.once('ready', () =>{
    console.log("Gogy is online!")
})


bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === 'tiktok'){
        message.channel.send('https://www.tiktok.com/@venusiscool?lang=en here you go good lad');
    }
    if(command === 'clear'){

        bot.commands.get('clear').execute(message, args);
    }
    if(command === 'request'){
      message.channel.reply({member}' What is your wish?')
      if(message.content.toLowerCase() === 'my wish is'){
        message.channel.reply('So your wish is' + message.content.toLowerCase())
        if(message.content.toLowerCase() === 'confirm') {
          message.channel.reply('Very well')
        }
      }
    }

})

bot.login(token);
