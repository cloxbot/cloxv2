const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const fs = require("fs");  
const Discord = require("discord.js");
  
module.exports = {
  name: "unban",
  category: "Moderation",
  description: "unbans the member",
  usage: "<id | mention>",
  run: async (client, message, args) => {
var userM = message.mentions.users.first()
              if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
              if(!args[0]) return  message.channel.send(':no_entry: | Please type the ID of user');
              if(args[0].length < 16) return message.reply(':no_entry: | This ID is not id user!');
              message.guild.fetchBans().then(bans => {
                  var Found = bans.find(m => m.id === args[0]);
                  if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
                  message.guild.unban(args[0]);
                  message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[0]}> From the server!`);
 let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
                  let banInfo = new Discord.RichEmbed()
                  .setTitle('**New Unbanned User !**')
                  .setThumbnail(message.author.avatarURL)
                  .setColor('51B322')
                  .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[0]}> From the server!\n\n**User:** <@${args[0]}> (ID: ${args[0]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
                  .setTimestamp()
                  .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)
 
                  let incidentchannel = message.guild.channels.find(`name`, `${logchannel}`);
                  if(!incidentchannel) return message.channel.send(`Can't find i${logchannel} channel.`);
                  incidentchannel.send(banInfo);
                  }
 
              )}
            }  