   const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fetch = require('node-fetch');
const snekfetch = require('snekfetch')

module.exports = {
  name: "hug",
  aliases: [""],
  category: "fun",
  description: "This command to give a hug to someone",
  usage: "[command | alias]",
  run: async (client, message, args) => {      
if (message.mentions.users.size < 1) return message.channel.send("you can't hug nobody")
      let user = message.guild.member(message.mentions.users.first());
        snekfetch.get('https://nekos.life/api/hug')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user} You got a hug from ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
  }}