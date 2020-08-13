const discord = require('discord.js');
const { run } = require('./dog');

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks somebody",
    usage: "kick <@user> <reason>",
    run: async (bot, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**,You can not kick this user, boi`)
        }
        
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**,I can not kick any user`)
        }

    const target = message.mentions.members.first();

    if(!target) {
        return message.channel.send(`**${message.author.username}**,Please mention the user you want to kick.`)
    }
        if(target.id === message.author.id) {
            return message.channel.send(`**${message.author.username}**, You can not kick yourself, dumby <a:BOI_PRAYERS:742566856644100197> `)
        }
        if(!args[1]) {
            return message.channel.send(`**${message.author.username}**, Please give a reason to kick this user`)
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Action: Kick")
        .setDescription(`Kicked ${target} (${target.id})`)
        .setColor('RANDOM')
        .setThumbnail(target.avatarURL)
        .setFooter(`Kicked by ${message.author.tag}`);

        message.channel.send(embed)
        target.kick(args[1])

    }
}