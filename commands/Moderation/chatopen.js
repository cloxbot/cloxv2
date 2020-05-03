module.exports = {
  name: "chatopen",
  aliases: ["co"],
  category: "Moderation",
  description: " this command to open the chat",
  usage: "<1-100>",
  run: async (client, message, args) => {
    
if(!message.channel.guild) return message.reply('** This command only for servers**');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__u do not have perms_**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
    
               }).then(() => {
                   message.reply("the chat is now opend :white_check_mark:")
               });
     }}