module.exports = {
    name: "count",
    aliases: [""],
  category: "",
    description: "return the weather of any city",
    usage: "<input>",
    run: (client, message, args) => {
      
      let targetGuild = client.guilds.get(`${args[0]}`)
      message.channel.send(`${targetGuild.name} have ${targetGuild.memberCount} users`)
      
    }} 
