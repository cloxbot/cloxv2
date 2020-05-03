 const discord = require("discord.js");
const invitelink = "https://discord.gg/5yJVHkX";

module.exports = {
  name: "support",
  category: "Info",
  description: "return the bot support server",
  usage: "[command | alias]",
  run: async (client, message, args) => {
    
    const embed = new discord.RichEmbed()
    .setColor('#51B322')
    .setTitle("Clox Bot support offical server")
    .addField('to join',`[Click Here](${invitelink})`)
  .setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();

    
    message.author.send(embed)
    message.reply("the support server link sent to you check your DM")
    
    
    
    
  }
};
