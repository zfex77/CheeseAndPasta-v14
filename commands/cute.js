const {MessageEmbed, Channel} = require('discord.js')
const api = require("imageapi.js")
module.exports={
name: "cute",
description: "GET CUTE IMAGES!!!",
category: "fun",
run: async(bot,message,args)=>{
let subreddits = [
"cute"
]
let subreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
console.log(subreddit)
let img = await api(subreddit)
console.log(img)
console.log(subreddit)
const Embed = new MessageEmbed()
        Embed.setTitle(`Cute, Just cute (copy the link if you want to use the image, it uses compression to show the gif), also the img might not appear, sorry`)
        Embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
        Embed.setColor('RANDOM')
        Embed.setImage(img)
message.channel.send(Embed)
    }
}