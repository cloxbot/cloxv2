const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fetch = require('node-fetch');
const snekfetch = require('snekfetch')
const superagent= require('superagent');
const {Canvas} = require("canvas-constructor");
const {resolve , join} = require('path');
const {get} = require('snekfetch');
const fs = require("fs");

module.exports = {
  name: "bed",
  aliases: [""],
  category: "fun",
  description: "the bed meme",
  usage: "[command | alias]",
  run: async (client, message, args) => {
    
    var beduser = message.mentions.members.first()
    if(!beduser) return message.reply("u must mention a user");
    var bed = message.author
     async function createCanvas() {
     let imageUrl= /\?size=2048$/g;
   
let image = "https://cdn.discordapp.com/attachments/671329636306911234/682585845588426772/Untitled.png";
    
let {body: background} = await superagent.get(image);
let{body: avatar} = await superagent.get(message.author.avatarURL.replace(imageUrl, "?size=128"))
let {body: avatar2} = await superagent.get(beduser.user.avatarURL.replace(imageUrl, "?size=128"))

    
    return new Canvas(447, 1101)
     

    .addImage(background, 0, 0, 447, 1101)
    .addCircularImage(avatar, 100, 165, 92)
    .addCircularImage(avatar, 100, 500, 92)
    .addCircularImage(avatar, 100, 750, 60)
    .addCircularImage(avatar2, 100, 940, 60)
    .toBufferAsync();
    
    
    
  }
  
  
    
    
  
 message.channel.send(  {
    
   files: [{
     
     attachment: await createCanvas(),
     name:'clox bot welcome message.png'
   }]
    
  });
  
    
     
   
  
   
    
  
  
  
    
     
   
  
 
  

	

    
  }};