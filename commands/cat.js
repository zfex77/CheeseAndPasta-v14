const {MessageEmbed, Channel} = require('discord.js')
const api = require("imageapi.js")
module.exports={
name: "cat",
description: "GET CAT IMAGES!!!",
category: "fun",
run: async(bot,message,args)=>{
let subreddits = [
"cats",
"kitten",
"britishshorthair",
"scottishfold",
"sphynx",
"ExoticShorthair",
"mainecoons",
"MunchkinCats",
"himalayancats",
"manx",
"BombayCat",
"SiberianCats",
"persiancat",
"ragdollcats",
"ragdolls",
"Siamesecats",
"Abyssinians",
"AmericanShorthair",
"NorwegianForestCats",
"burmesecats",
"birmans",
"russianblue",
"devonrex",
"cornishrex",
"Siamesecats",
"turkishangoras",
"AmericanCurl",
"ocicat",
"RagamuffinCats",
"Tonkinese",
"catsinbeds",
"korats",
"AliveNamedCats",
"Chonkers"
]
let subreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
console.log(subreddit)
let img = await api(subreddit)
console.log(img)
console.log(subreddit)
const Embed = new MessageEmbed()
        Embed.setTitle(`A ${subreddit} image from r/${subreddit}, if it is a "CatGif" it could be a video, so mabye click the image link`)
        Embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
        Embed.setColor('RANDOM')
        Embed.setImage(img)
message.channel.send(Embed)
    }
}
