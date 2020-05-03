const Discord = require("discord.js");
const mongoose = require("mongoose")
const Report = require("../../models/reports.js")

module.exports = {
  name: "dbreport",
  category: "Info",
  description: "Returns the bot info",
  usage: "[command | alias]",
   run: async (client, message, args) => {
     mongoose.connect("mongodb+srv://cloxbot:AaA@9090@cluster0-tee80.mongodb.net/clox?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },
err => {
    if (err) console.log(err);
  }
);
      let rUser = message.mentions.members.first() || message.guild.members.get(args[0]);
     let rReason = args.slice(1).join(" ");
     const report = new Report ({
       
        _id: mongoose.Types.ObjectId(),
 username: rUser.user.username,
  userID: rUser.id,
  reason: rReason,
  rUsername: message.author.username,
  rID: message.author.id,
  time: message.createdAt
     });
     report.save()
     .then(result => console.log(result))
     .catch(err => console.lgo(err));
     message.reply("done")
   }}