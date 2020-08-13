const discord = require('discord.js');
const { run } = require('./dog');

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Bans somebody",
    usage: "ban <@user> <reason>",
    run: async (bot, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**,You can not ban this user, boi `)
        }
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**,I can not ban any user`)
        }

    const target = message.mentions.members.first();

    if(!target) {
        return message.channel.send(`**${message.author.username}**,Please mention the user you want to ban.`)
    }
        if(target.id === message.author.id) {
            return message.channel.send(`**${message.author.username}**, You can not ban yourself, dumby <a:BOI_PRAYERS:742566856644100197> `)
        }
        if(!args[1]) {
            return message.channel.send(`**${message.author.username}**, Please give a reason to ban this user`)
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Action: Ban")
        .setDescription(`Banned ${target} (${target.id})`)
        .setColor('RANDOM')
        .setThumbnail(target.avatarURL)
        .setFooter(`Banned by ${message.author.tag}`);

        message.channel.send(embed)
        target.ban(args[1])

    }
}