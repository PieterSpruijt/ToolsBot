const Discord = require('discord.js');
module.exports = {
    name: "buttons",
    description: "Create buttons!",
    category: "testing",
    run: async (bot, interaction) => {
        const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId(`buttons_blue_${interaction.user.id}`)
          .setLabel('blue')
          .setStyle('PRIMARY')
          .setEmoji("1️⃣"),
          new Discord.MessageButton()
          .setCustomId(`buttons_gray_${interaction.user.id}`)
          .setLabel('gray')
          .setStyle('SECONDARY')
          .setEmoji("2️⃣"),
          new Discord.MessageButton()
          .setCustomId(`buttons_green_${interaction.user.id}`)
          .setLabel('green')
          .setStyle('SUCCESS')
          .setEmoji("3️⃣"),
          new Discord.MessageButton()
          .setCustomId(`buttons_red_${interaction.user.id}`)
          .setLabel('red')
          .setStyle('DANGER')
          .setEmoji("4️⃣"),
          new Discord.MessageButton()
          .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
          .setLabel('link')
          .setStyle('LINK')
          .setEmoji("5️⃣"),
      );
        interaction.editReply({ content: `Here are some buttons for you:`, components: [row] });
    },
}