 const figlet = require('figlet');
module.exports = {
  name: "bigfont",
  aliases: ["bigf"],
  category: "fun",
  description: "This command to type any word with big font",
  usage: "<input>",
  run: async (client, message, args) => {




if(!args[0]) return message.reply('pls type any word');  

    figlet(args.join(" "), (err, data) => {
      font: 'art',
              message.channel.send("```" + data + "```")
           })

}}