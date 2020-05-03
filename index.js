const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();
const superagent= require('superagent');
const {Canvas} = require("canvas-constructor");
const {resolve , join} = require('path');
const {get} = require('snekfetch');
const db = require('quick.db');
const Discord = require('discord.js');
const discord = require('discord.js');
const ms = require("ms");
const Enmap = require("enmap");

var server = require('http').createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



client.on('ready', function(){
    console.log(`${client.user.username}  has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds!`);
  console.log(`>>>>>>and this is the servers list<<<<<<`);
  client.guilds.map((guild) => console.log(`Server Name: ${guild.name} (ID: ${guild.id})`));
    var ms = 10000 ;
    var setGame = [`${client.guilds.size} Server`,'+help','Type +help',`${client.users.size} Members`,'+inv','By:@Martin🍁#1969 '];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
		client.user.setActivity(setGame[i], {type: "PLAYING"});
    }, ms);
})

client.on("message", async message => {

let rand = Math.floor(Math.random() * 7) + 8;
    db.add(`messages_${message.guild.id}_${message.author.id}`, rand) 
  let messagefetch1 = await db.fetch(`messages_${message.guild.id}_${message.author.id}`) 

  let messages;
  if (messagefetch1 == 250) messages = 250; //Level 1
  else if (messagefetch1 == 3000) messages = 3000; // Level 2
  else if (messagefetch1 == 11500) messages = 11500; // Level 3
  else if (messagefetch1 == 30000) messages = 30000; // Level 5
  else if (messagefetch1 == 50000) messages = 50000; // Level 5
  else if (messagefetch1 == 100000) messages = 100000; // Level 6
  else if (messagefetch1 == 150000) messages = 150000; // Level 7
  else if (messagefetch1 == 200000) messages = 200000; // Level 8
  else if (messagefetch1 == 250000) messages = 250000; // Level 9
  else if (messagefetch1 == 300000) messages = 300000; // Level 10
  else if (messagefetch1 == 4000000) messages = 4000000; // Level 11
  else if (messagefetch1 == 5500000000) messages = 5500000000; // Level 12

  if (!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1)
    let levelfetch = await db.fetch(`level_${message.guild.id}_${message.author.id}`)
    
 if (message.author.bot) return;
   message.channel.send(`${message.author}, You have leveled up to level ${levelfetch}`)
  }
  
  
 




  
  




  
   
    
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: process.env.prefix
    };
    
  }
let prefix = prefixes[message.guild.id].prefixes;
  
   if (message.author.bot) return;
    if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
  
  
  
  
 

});

client.on("guildMemberAdd", async member => {
  
  let username = member.user.username
  let name = username.length > 12 ? username.substring(0,10) + "..." : username;
  async function createCanvas() {
     let imageUrl= /\?size=2048$/g;
   
let image = "https://cdn.discordapp.com/attachments/671329636306911234/682361402568212569/card.png";
    
let {body: background} = await superagent.get(image);
let{body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrl, "?size=128"))

    
    return new Canvas(856, 376)
     

    .addImage(background, 0, 0, 856, 376)
    .addCircularImage(avatar, 428, 146, 92)
    .setColor('#FFFFFF')
    .setTextFont('bold 35px Arial')
    .addText(`${member.user.username} just joined the server`, 165, 300)
    .toBufferAsync();
    
    
    
  }
  
  
    
    
  
   const welcome = JSON.parse(fs.readFileSync("./welc.json", "utf8"));
  if(!welcome[member.guild.id]){
    welcome[member.guild.id] = {
      welcome: process.env.welcome
    };
  }
  
const welcomechannel = welcome[member.guild.id].welcome;
 const   welcomech = member.guild.channels.find(channel => welcome.channel === welcomechannel);

  welcomech.send(`Hello, <@${member.user.id}> welcome to ${member.guild.name}`,  {
    
   files: [{
     
     attachment: await createCanvas(),
     name:'clox bot welcome message.png'
   }]
    
  });
  
                                                
                                                            
     
  
});
	

    client.on("guildMemberAdd", member => {
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) { 
		autorole[member.guild.id] = {
			autorole: process.env.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role) return; 
	member.addRole(role);
});
  


client.login(process.env.TOKEN);