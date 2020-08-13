const {MessageEmbed, Channel} = require('discord.js')
const api = require("imageapi.js")
module.exports={
name: "cheese",
description: "GET CHEESE IMAGES!!",
category: "fun",
run: async(bot,message,args)=>{
let subreddits = [
"cheese"
]
let subreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
console.log(subreddit)
let img = await api(subreddit)
console.log(img)
console.log(subreddit)
const Embed = new MessageEmbed()
        Embed.setTitle(`A ${subreddit} image from r/${subreddit}`)
        Embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
        Embed.setColor('RANDOM')
        Embed.setImage(img)
message.channel.send(Embed)
    }
}