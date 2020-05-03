const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "meme",
  category: "fun",
  description: "This command gives you a random meme",
  usage: "[command | alias]",
  run: async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new RichEmbed()
      .setColor("#51B322")
      .setImage(img)
      .setTitle(`Clox Bøt memes`);

    message.channel.send(embed);
  }
};
