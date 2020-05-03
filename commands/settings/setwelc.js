const fs = require("fs");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "setwelc",
  aliases: [""],
  category: "settings",
  description: "to change the bot welcome channel",
  usage: "<input>",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("sorry but this command to owners only");
    if (!args[0] || args[0 == "help"])
      return message.reply("usage : +setwelc <welcome channel name>");

    let welcome = JSON.parse(fs.readFileSync("././welc.json", "utf8"));
    welcome[message.guild.id] = {
      welcome: args[0]
    };

    fs.writeFile("././welc.json", JSON.stringify(welcome), err => {
      if (err) console.log(err);
    });

    let prefixEmbed = new Discord.RichEmbed()
      .setColor("#51B322")
      .setTitle("welcome channel set successfuly !")
      .setDescription(`to ${args[0]}`);
    message.channel.send(prefixEmbed);
  }
};
