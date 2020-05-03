const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("././warnings.json", "utf8"));

module.exports = {
    name: "removewarn",
    category: "Moderation",
    description: "unmute a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("sorry , you don't have permission to use this command!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("you can not warn this user");
  if(!wUser) return message.reply("Couldn't find this user");
  
  let reason = args.join(" ").slice(22);
if(!reason) return message.reply("you must type a reason")
      
   
      
     
      
      if(warns[wUser.id].warns == 0)
    
    return message.reply("there is no any warn to this user.");
        
       if(warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  

 
      
      
  

  fs.writeFile("././warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("remove Warns")
  .setAuthor(message.author.username)
  .setColor("#51B322")
  .addField(" User", `<@${wUser.id}>`)
  .addField("In", message.channel)
  .addField("Reason", reason);
let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
  

  message.guild.channels.find("name", `${logchannel}`).send(warnEmbed);

 

}

}