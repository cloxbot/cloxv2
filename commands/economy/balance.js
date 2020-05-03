const db = require('quick.db');
const Discord = require('discord.js');
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://cloxbot:AaA@9090@cluster0-tee80.mongodb.net/clox?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },
err => {
    if (err) console.log(err);
  }
);

module.exports = {
  name: "balance",
  category: "economy",
  description: "bans the member",
  usage: "<id | mention>",
  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.author;
      let money = await db.fetch(`money_${user.id}`)

    if (money === null) money = 0;

    message.channel.send(`hey ${user}, you have ${money} clox coins !`)

    
  }}