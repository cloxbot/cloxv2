const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs");
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  aliases: [""],
  category: "Info",
  description: "Returns all commands, or one specific command info",
  usage: "[command | alias]",

  run: async (client, message, args) => {
    let prefixes = JSON.parse(fs.readFileSync("././prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: process.env.prefix
      };
    }

    const prefix = prefixes[message.guild.id].prefixes;
    const embed = new RichEmbed()
      .setColor("#51B322")
      .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
      .setThumbnail(client.user.displayAvatarURL);

    if (!args[0]) {
      const categories = readdirSync("./commands/");

      embed.setDescription(
        `These are the avaliable commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**`
      );
      embed.setFooter(
        `© ${message.guild.me.displayName} | Total Commands: ${client.commands.size}`,
        client.user.displayAvatarURL
      );

      categories.forEach(category => {
        const dir = client.commands.filter(c => c.category === category);
        const capitalise =
          category.slice(0, 1).toUpperCase() + category.slice(1);
        try {
          embed.addField(
            `❯ ${capitalise} [${dir.size}]:`,
            dir.map(c => `\`${c.name}\``).join(" ")
          );
        } catch (e) {
          console.log(e);
        }
      });

      return message.channel.send(embed);
    } else {
      let command = client.commands.get(
        client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase()
      );
      if (!command)
        return message.channel.send(
          embed
            .setTitle("Invalid Command.")
            .setDescription(
              `Do \`@{prefix}help\` for the list of the commands.`
            )
        );

      embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() +
              command.name.slice(1)}
            **Description:** ${command.description ||
              "No Description provided."}
            **Usage:** ${
              command.usage
                ? `\`${prefix}${command.name} ${command.usage}\``
                : "No Usage"
            }
            **category:** ${command.category}

            **Aliases:** ${
              command.aliases ? command.aliases.join(", ") : "None."
            }`);

      return message.channel.send(embed);
    }
  }
}