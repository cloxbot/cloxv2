const Discord = require("discord.js");
module.exports = {
  name: "server",
  category: "Info",
  description: "Returns the server info",
  usage: "[command | alias]",
  run: async (client, message, args) => {


var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
 	let sicon = message.guild.iconURL;
 	let serverembed = new Discord.RichEmbed()
 	    .setTitle(`<a:coin:600899275861393448> ${message.guild.name} Information`)
 	    .setColor("51B322")
 	    .setThumbnail(message.guild.iconURL)
 	    .addField(`:name_badge: SERVER NAME`, message.guild.name,true)
 	    .addField(`🕑 CREATED AT`, year + "/"+ month +"/"+ day,true)
 	    .addField(`:earth_americas: Server Region`, message.guild.region,true)
 	    .addField(`:lock: Verification Level`, message.guild.verificationLevel,true)	
		.addField(`<a:online:600910245035769876> Online Members`,message.guild.members.filter(m => m.presence.status == 'online').size,true)
		.addField(`:crown: Server Owner`,message.guild.owner,true)
		.addField(`:busts_in_silhouette: Total users`, message.guild.memberCount,true)
		.addField(`:medal: Total Roles`, message.guild.roles.size,true)
		.addField(`:writing_hand: Total Text Channels`,message.guild.channels.filter(m =>m.type === 'text').size,true)
		.addField(`:speaker: Total Voice Channels`,message.guild.channels.filter(m => m.type === 'voice').size,true)
		.addField(`:id: Server ID`,message.guild.id,true)
		.addField(`:id: Owner ID`,message.guild.owner.id,true)
	.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp();

  
 	return message.channel.send(serverembed);
    
  }};