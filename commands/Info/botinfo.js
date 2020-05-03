const Discord = require("discord.js");
module.exports = {
  name: "bot",
  category: "Info",
  description: "Returns the bot info",
  usage: "[command | alias]",
  run: async (client, message, args) => {
var year = client.user.createdAt.getFullYear()
var month = client.user.createdAt.getMonth()
var day = client.user.createdAt.getDate()
 	let uicon = client.user.displayAvatarURL;
 	let botembed = new Discord.RichEmbed()
 	    .setDescription("bot Information")
 	    .setColor('51B322')
 	    .setThumbnail(uicon)
 	    .addField("Bot Name", client.user.username,true)
 	    .addField("created in", year + "/"+ month +"/"+ day,true)
		.addField("bot tag", client.user.tag,true)
  .addField("bot users",client.users.size,true)
  .addField("bot channels",client.channels.size,true )
  .addField("bot servers",client.guilds.size,true)
  .addField(`Bot Owner`,`<@257147010488991744>`,true)
		.addBlankField()
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();


 	return message.channel.send(botembed);

}};
