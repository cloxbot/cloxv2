const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://nekos.life/api/kiss";
   const { RichEmbed } = require("discord.js");

const randomPuppy = require("random-puppy");
const fetch = require('node-fetch');
const snekfetch = require('snekfetch')

module.exports = {
  name: "kissss",
  aliases: [""],
  category: "fuun",
  description: "This command to give a hug to someone",
  usage: "[command | alias]",
  run: async (client, message, args) => {     
    
    snek.get(api).then(r => {
      if(!message.mentions.members.first()) {
        const embed = new Discord.RichEmbed()
            .setColor(`#51B322`)
            .setTitle(`${message.author.username} kiss`)
            .setImage(r.body.url)
            return message.channel.send(embed);
                  }
        const embed = new Discord.RichEmbed()
            .setColor(`51B322v`)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a Kiss! How sweet!`)
            .setImage(r.body.url)
            message.channel.send(embed);
    })
}

  }