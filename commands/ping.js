const Discord = require('discord.js');

module.exports={
    name: 'ping',
    category: 'info',
    description: 'Pings me goshdamnit',
    run: async(bot, message, args)=>{
        const msg = await message.channel.send('Pinging...')
        const Embed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}MS\nAPI latency is ${Math.round(bot.ws.ping)}MS\nPinged! `)
        .setColor('RANDOM')
        msg.edit(Embed)
    }
}