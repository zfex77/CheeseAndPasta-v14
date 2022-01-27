const {MessageEmbed, Channel} = require('discord.js')
const api = require("imageapi.js")
module.exports={
name: "dog",
description: "GET DOG IMAGES!!!",
category: "fun",
run: async(bot,message,args)=>{
let subreddits = [
"dogs",
"dogberg",
"dogpictures",
"goldenretrievers",
"puppies",
"shiba",
"ShibaInu",
"rarepuppers",
"banpitbulls",
"Corgi",
"Bostonterrier",
"Pomeranians",
"Frenchbulldogs",
"pugs",
"poodles",
"akita",
"fluffydogs",
"dogswithsocks",
"dogswitheyebrows",
"DogsWithCatHeads",
"dogswithjobs",
"rarepepes"
]
let subreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
console.log(subreddit)
let img = await api(subreddit)
console.log(img)
console.log(subreddit)
const Embed = new MessageEmbed()
        Embed.setTitle(`A ${subreddit} image from r/${subreddit} (If you get the rarepepe... that's pretty epic.)`)
        Embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
        Embed.setColor('RANDOM')
        Embed.setImage(img)
message.channel.send(Embed)
    }
}
