const { RichEmbed } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "say",
  aliases: ["s"],
  category: "Moderation",
  description: "Says your input via the bot",
  usage: "<input>",
  run: (client, message, args) => {
    

    
    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("You don't have the required permissions to use this command.")
        .then(m => m.delete(5000));

    if (args.length < 0)
      return message.reply("Nothing to say?").then(m => m.delete(5000));

    const roleColor = message.guild.me.highestRole.hexColor;

    if (args[0].toLowerCase() === "embed") {
      const embed = new RichEmbed()
        .setDescription(args.slice(1).join(" "))
        .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

      message.channel.send(embed);
    } else {
      message.channel.send(args.join(" "));
    }
  }
};
