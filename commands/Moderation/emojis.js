const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs");
const { readdirSync } = require("fs");
const Discord = require("discord.js");

module.exports = {
  name: "emojis",
  aliases: [""],
  category: "Moderation",
  description: "Returns all server emojis",
  usage: "[command | alias]",

  run: async (client, message, args) => {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

     const EmojiList = new Discord.RichEmbed()
            .setTitle(`${message.guild.name} Emojis List`) 
            
            .setColor('51B322') 
            .setDescription(List) 
            .setFooter(`©️ Clox Bot` )
        message.channel.send(EmojiList) 
  }}