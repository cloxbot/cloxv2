const fs = require("fs");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "setlogs",
  aliases: [""],
  category: "settings",
  description: "to change the bot logs channel",
  usage: "<input>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("sorry but this command to owners only");
    if (!args[0] || args[0 == "help"])
      return message.reply("usage : +setlogs < channel name>");

    let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
    log[message.guild.id] = {
      log: args[0]
    };

    fs.writeFile("././log.json", JSON.stringify(log), err => {
      if (err) console.log(err);
    });

    let prefixEmbed = new Discord.RichEmbed()
      .setColor("#51B322")
      .setTitle("log set successfuly !")
      .setDescription(`to ${args[0]}`);
    message.channel.send(prefixEmbed);
  }
};
