const {MessageEmbed, Channel} = require('discord.js')
const api = require("imageapi.js")
module.exports={
name: "food",
description: "GET FOOD IMAGES!!!",
category: "fun",
run: async(bot,message,args)=>{
let subreddits = [
"food",
"foodporn",
"pancakes",
"waffles",
"sushi",
"bacon"
]
let subreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
console.log(subreddit)
let img = await api(subreddit)
console.log(img)
console.log(subreddit)
const Embed = new MessageEmbed()
        Embed.setTitle(`A ${subreddit} image from r/${subreddit}`)
        Embed.setURL(`https://reddit.com/r/${subreddit}`)
        Embed.setColor('RANDOM')
        Embed.setImage(img)
message.channel.send(Embed)
    }
}