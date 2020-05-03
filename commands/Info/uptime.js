const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');
module.exports = {
 name: "uptime",
  category: "Info",
  description: "Returns the bot uptime",
  usage: "[command | alias]",
  run: async (client, message, args) => {

  try {
    const embed = new Discord.RichEmbed()
      .setTitle("Clox Bot Uptime")
      .addField('Uptime:', moment.duration(client.uptime).format('d [days], h [hours], m [minutes], s [seconds]', { trim: "small" }), true)
      .setColor("#51B322")
    .setFooter(client.user.username, client.user.displayAvatarURL);
     message.channel.send(embed)
  } catch (err) {
      message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
}}