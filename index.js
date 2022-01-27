require("dotenv").config();

const { Client } = require('discord.js');
const Discord = require('discord.js')
const client = new Client();

const PREFIX = 'p!'

const fs = require('fs');
const cat = require('./commands/cat');

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.log('This bot is online!');
    client.user.setActivity('One Piece', { type: "WATCHING"})
});

client.on('message', (message) => {
  console.log(message.content);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
