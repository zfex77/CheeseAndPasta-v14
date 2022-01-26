const token = 'OTM1NzE4NzU0OTI1NTU1NzMy.YfCt_w.Jh3Eyhxk4ak7Ngx3xzqGohsXJbs'

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'p!'

const fs = require('fs');
const cat = require('./commands/cat');

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () =>{
    console.log('This bot is online!');
    client.user.setActivity('Naruto', { type: "WATCHING"})
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
      if (!cmd) return;
if (cmd) cmd.run(client, message, args)





});

client.login(process.env.token) 
