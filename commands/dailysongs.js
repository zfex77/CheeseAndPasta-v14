const discord = require('discord.js');
const { run } = require('./dog');

module.exports = {
    name: "dailysongs",
    category: "none",
    description: "idk, at this point",
run: async (bot, message, args) => {
    message.channel.send('https://www.youtube.com/watch?v=WSle4wp6NAo, its a great song!, if you want people to check out then here, https://pastebin.com/2WvAU6UK')
}
}