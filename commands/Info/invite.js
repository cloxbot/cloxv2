 const discord = require("discord.js");
const invitelink = "https://discordapp.com/oauth2/authorize?client_id=654097136375431238&permissions=2080374975&scope=bot";

module.exports = {
  name: "invite",
  category: "Info",
  description: "invite the bot to your server",
  aliases: ["inv"],
  usage: "[command | alias]",
  run: async (client, message, args) => {
    
    const embed = new discord.RichEmbed()
    .setColor('#51B322')
    .setTitle("Clox Bot invite")
    .addField('invite the bot',`[Click Here](${invitelink})`)
  .setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();

    
    message.author.send(embed)
    message.reply("the invite link sent to you check your DM")
    
    
    
    
  }
};
