   const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fetch = require('node-fetch');
const snekfetch = require('snekfetch')

module.exports = {
  name: "gayrate",
  aliases: ["gr"],
  category: "fun",
  description: "This command to give a hug to someone",
  usage: "[command | alias]",
  run: async (client, message, args) => {      

    
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 101)}% Gay**!`)
    .setColor('#51B322')
    .setThumbnail("http://www.pngall.com/wp-content/uploads/2017/03/Rainbow-Flag-PNG-Clipart.png")
    return message.channel.send(gayembed);
}
    
    
    
    
  }