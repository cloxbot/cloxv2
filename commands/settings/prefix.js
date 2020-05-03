const fs = require("fs");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "setprefix",
  aliases: [""],
  category: "settings",
  description: "to change the bot prefix",
  usage: "<input>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("sorry but this command to owners only");
    if (!args[0] || args[0 == "help"])
      return message.reply("usage : +prefix <your coustom prefix>");

    let prefixes = JSON.parse(fs.readFileSync("././prefixes.json", "utf8"));
    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("././prefixes.json", JSON.stringify(prefixes), err => {
      if (err) console.log(err);
    });

    let prefixEmbed = new Discord.RichEmbed()
      .setColor("#51B322")
      .setTitle("prefix set successfuly !")
      .setDescription(`to ${args[0]}`);
    message.channel.send(prefixEmbed);
  }
};
