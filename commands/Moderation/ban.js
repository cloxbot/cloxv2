const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const fs = require("fs");

module.exports = {
  name: "ban",
  category: "Moderation",
  description: "bans the member",
  usage: "<id | mention>",
  run: async (client, message, args) => {
  
    if (message.deletable) message.delete();

    // No args
    if (!args[0]) {
      return message
        .reply("Please provide a person to ban.")
        .then(m => m.delete(5000));
    }

    // No reason
    if (!args[1]) {
      return message
        .reply("Please provide a reason to ban.")
        .then(m => m.delete(5000));
    }

    // No author permissions
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message
        .reply(
          "❌ You do not have permissions to ban members. Please contact a staff member"
        )
        .then(m => m.delete(5000));
    }
    // No bot permissions
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message
        .reply(
          "❌ I do not have permissions to ban members. Please contact a staff member"
        )
        .then(m => m.delete(5000));
    }

    const toBan =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    // No member found
    if (!toBan) {
      return message
        .reply("Couldn't find that member, try again")
        .then(m => m.delete(5000));
    }

    // Can't ban urself
    if (toBan.id === message.author.id) {
      return message
        .reply("You can't ban yourself...")
        .then(m => m.delete(5000));
    }

    // Check if the user's banable
    if (!toBan.bannable) {
      return message
        .reply("I can't ban that person due to role hierarchy, I suppose.")
        .then(m => m.delete(5000));
    }
let log = JSON.parse(fs.readFileSync("././log.json", "utf8"));
  if(!log[message.guild.id]){
    log[message.guild.id] = {
      log: process.env.log
    };
    
  }
let logchannel = log[message.guild.id].log;
    const embed = new RichEmbed()
      .setColor("#51B322")
      .setThumbnail(toBan.user.displayAvatarURL)
      .setFooter(message.member.displayName, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(stripIndents`**- baned member:** ${toBan} (${toBan.id})
            **- baned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

    const promptEmbed = new RichEmbed()
      .setColor("#51B322")
      .setAuthor(`This verification becomes invalid after 30s.`)
      .setDescription(`Do you want to ban ${toBan}?`);

    // Send the message
    await message.channel.send(promptEmbed).then(async msg => {
      // Await the reactions and the reactioncollector
      const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

      // Verification stuffs
      if (emoji === "✅") {
        msg.delete();

        toBan.ban(args.slice(1).join(" ")).catch(err => {
          if (err)
            return message.channel.send(
              `Well.... the ban didn't work out. Here's the error ${err}`
            );
        });

        message.guild.channels.find("name", `${logchannel}`).send(embed);
      } else if (emoji === "❌") {
        msg.delete();

        message.reply(`ban canceled.`).then(m => m.delete(10000));
      }
    });
  }
};
