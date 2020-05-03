module.exports = {
  name: "chatclose",
  aliases: ["cc"],
  category: "Moderation",
  description: " this command to close the chat",
  usage: "<1-100>",
  run: async (client, message, args) => {
    
if(!message.channel.guild) return message.reply('** This command only for servers**');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__u do not have perms_**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
    
               }).then(() => {
                   message.reply("the chat is now closed :white_check_mark:")
               });
     }}