const Discord = require('discord.js');

module.exports = {
    name: "source",
    description: "I'm open source GUYS!",
    category: "botinfo",
    run: async (bot, interaction) => {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setLabel(`GitHub`)
                    .setStyle(`LINK`)
                    .setURL(`https://github.com/PieterSpruijt/ToolsBot`)
            )
        interaction.editReply({ content: `click on the button below to see the GitHub`, components: [row] });
    },
}