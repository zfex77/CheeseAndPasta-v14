const discord = require('discord.js');
const { run } = require('./dog');

module.exports = {
    name: "invite",
    category: "none",
    description: "idk, at this point",
run: async (bot, message, args) => {
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=734898843514044467&permissions=0&redirect_uri=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&scope=bot')
}
}