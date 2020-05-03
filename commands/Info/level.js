const Discord = require('discord.js');
const db = require('quick.db');
const Enmap = require('enmap');
module.exports = {
  name: "level",
  category: "Info",
  description: "to know your level in the server",
  aliases: ["inv"],
  usage: "[command | alias]",
  run: async (client, message, args) => {
    

    let messagefetch1 = await db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    let levelfetch = await db.fetch(`level_${message.guild.id}_${message.author.id}`)
let messages1;
  if (messagefetch1 > 250) messages1 = 3000; //Level 1
  else if (messagefetch1 > 3000) messages1 = 3000; // Level 2
  else if (messagefetch1 > 11500) messages1 = 11500; // Level 3
  else if (messagefetch1 > 30000) messages1 = 30000; // Level 5
  else if (messagefetch1 > 50000) messages1 = 50000; // Level 5
  else if (messagefetch1 == 100000) messages1 = 100000; // Level 6
  else if (messagefetch1 == 150000) messages1 = 150000; // Level 7
  else if (messagefetch1 == 200000) messages1 = 200000; // Level 8
  else if (messagefetch1 == 250000) messages1 = 250000; // Level 9
  else if (messagefetch1 == 300000) messages1 = 300000; // Level 10
  else if (messagefetch1 == 4000000) messages1 = 4000000; // Level 11
  else if (messagefetch1 == 5500000000) messages1 = 5500000000; // Level 12
    if(messagefetch1 == null) messagefetch1 = '0';
    if(levelfetch == null) levelfetch = '0';

   

    message.channel.send(`${message.author}, You Are Level: \`${levelfetch}\` & Have Sent: \`${messagefetch1}\` XP you need ${messages1 - messagefetch1} xp to rich level ${levelfetch + 1}`)

  }
  }

