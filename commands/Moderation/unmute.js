const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs");
module.exports = {
    name: "unmute",
    category: "Moderation",
    description: "unmute a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

//define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

//define mute role and if the mute role doesnt exist then send a message
let muterole = message.guild.roles.find(r => r.name === "muted")
if(!muterole) return message.channel.send("There is no mute role to remove!")

//remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
mutee.removeRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} was unmuted!`)
})
let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
//send an embed to the modlogs channel
let embed = new RichEmbed()
.setColor("51B322")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "unmute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())


 message.guild.channels.find("name", `${logchannel}`).send(embed);

    }
}