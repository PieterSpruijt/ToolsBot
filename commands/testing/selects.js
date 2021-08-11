const Discord = require('discord.js');
module.exports = {
    name: "selects",
    description: "Create a select menu!",
    category: "testing",
    run: async (bot, interaction) => {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId(`selects_testing_${interaction.user.id}`)
                    .setPlaceholder('Select a number | Nothing selected!')
                    .addOptions([
                        {
                            label: `One`,
                            description: `This will send a one`,
                            value: `one`,
                            emoji: `1️⃣`,
                        },
                        {
                            label: `Two`,
                            description: `This will send a teo`,
                            value: `two`,
                            emoji: `2️⃣`,
                        },
                        {
                            label: `Three`,
                            description: `This will send a three`,
                            value: `three`,
                            emoji: `3️⃣`,
                        },
                        {
                            label: `Four`,
                            description: `This will send a four`,
                            value: `four`,
                            emoji: `4️⃣`,
                        },
                        {
                            label: `Five`,
                            description: `This will send a five`,
                            value: `five`,
                            emoji: `5️⃣`,
                        },
                        {
                            label: `Six`,
                            description: `This will send a six`,
                            value: `six`,
                            emoji: `6️⃣`,
                        },
                    ]),
            );
            interaction.editReply({content: `Here is a select menu:`, components: [row]});
    },
}