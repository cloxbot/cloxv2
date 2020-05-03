const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const fs = require("fs");
const ms= require("ms");
module.exports = {
    name: "mute",
    category: "Moderation",
    description: "Kicks the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if (tomute.user.id === message.author.id) return message.channel.send("You can't mute ur self !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
      let incidentchannel = message.guild.channels.find(`name`, `${logchannel}`);
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    incidentchannel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}
}