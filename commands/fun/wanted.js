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
  name: "wanted",
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
   
let image = "https://cdn.discordapp.com/attachments/671329636306911234/683046158758576215/Pngtreewestern_thief_order_cosplay_party_3807086.png";
    
let {body: background} = await superagent.get(image);

let {body: avatar} = await superagent.get(beduser.user.avatarURL.replace(imageUrl, "?size=128"))

    var reason = ["For being a killer","For being a hacker","For fuck trump","For being a gay"]
var moon = reason[Math.floor(Math.random() * reason.length)];
    return new Canvas(1129, 1667)
     

    .addImage(background, 0, 0, 1129, 1667)
    .addImage(avatar, 170, 340, 810, 700)
       .setColor('#000000')
    .setTextFont('bold 100px Arial')
    .addText(`${moon}`, 160, 1540)
    .toBufferAsync();
    
    
    
  }
  
  
    
    
  
 message.channel.send(  {
    
   files: [{
     
     attachment: await createCanvas(),
     name:'wanted_cloxbot.png'
   }]
    
  });
  
    
     
   
  
   
    
  
  
  
    
     
   
  
 
  

	

    
  }};