const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("././warnings.json", "utf8"));

module.exports = {
    name: "warn",
    category: "Moderation",
    description: "unmute a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("sorry , you don't have permission to use this command!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
       
  if(!wUser) return message.reply("Couldn't find this user"); 
  
  let reason = args.join(" ").slice(22);
if(!reason) return message.reply("you must type a reason")
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("././warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#51B322")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);
let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
  

  message.guild.channels.find("name", `${logchannel}`).send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "1d";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }

}

}