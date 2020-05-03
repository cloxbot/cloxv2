const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "user",
    aliases: ["who", "user", "info"],
    description: "Returns user information",
  category: "Info",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("#51B322")

            .addField('Member information:', stripIndents`**🇦- Display name:** ${member.displayName}

            **🗓️- Joined at:** ${joined}

            **📜- Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`**🆔- ID:** ${member.user.id}

            **👤- Username**: ${member.user.username}

            **#️⃣- Tag**: ${member.user.tag}

            **📅- Created at**: ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**🎮 Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}