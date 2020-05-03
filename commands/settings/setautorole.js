const fs = require("fs");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')


module.exports = {
  name: "setautorole",
  aliases: [""],
  category: "settings",
  description: "to change the bot auto role ",
  usage: "<input>",
  run: async (client, message, args) => {



  
 

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you can't use this command");
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!args[0]) { // jika tidak ada argument makan autorole akan dimatikan
		autorole[message.guild.id] = {
			role: 0
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(`**${message.author.username}** autorole has been turned off!`);
	}
	if (args[0]) { // jika ada argumen maka akan dijadikan autorole
		let roles = args.join(" ");
		let role = message.guild.roles.find("name", roles);
		autorole[message.guild.id] = {
			role: role.id // yang diambil hanya id nya saja
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});
		message.channel.send(`**${message.author.username}** autorole set to**${role.name}**`);
	}
}

}

