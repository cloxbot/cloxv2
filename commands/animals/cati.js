      const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fetch = require('node-fetch');
const snekfetch = require('snekfetch')

module.exports = {
  name: "cat",
  aliases: [""],
  category: "animals",
  description: "This command gives you a random cat photos",
  usage: "[command | alias]",
  run: async (client, message, args) => {
          const superagent = require("superagent");
      const { body } = await superagent
      .get('https://some-random-api.ml/img/cat');
      const embed  = new Discord.RichEmbed()
      .setTitle("Clox Bot cats")
      .setColor("#51B322")
      .setImage(body.link)
      
      message.channel.send({embed})
}

  }
