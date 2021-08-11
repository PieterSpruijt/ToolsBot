
module.exports = async function (bot, interaction) {
    if (interaction.isContextMenu()) {
        await interaction.deferReply();
        await interaction.editReply(`You found it!`);

    } else if (interaction.isButton()) {
        if (interaction.customId.startsWith(`buttons_`)) {
            await interaction.deferReply({ ephemeral: true });
            let user = interaction.customId.split(`_`)[2];
            if (user != interaction.user.id) return await interaction.editReply({ content: `This button is not for you, make your own with /buttons`, ephemeral: true });
            const FLAGS = {
                blue: `1️⃣`,
                gray: `2️⃣`,
                green: `3️⃣`,
                red: `4️⃣`

            }
            interaction.editReply(`${interaction.customId.split(`_`)[1]}: ${FLAGS[interaction.customId.split(`_`)[1]]}`);
        }
    } else if (interaction.isMessageComponent()) {

        if (interaction.componentType === `SELECT_MENU`) {
            if (interaction.customId.startsWith(`selects_testing_`)) {
                await interaction.deferReply({ ephemeral: true });
                if (interaction.customId.slice(16) != interaction.user.id) return await interaction.editReply({ content: `This select menu is not for you, make your own with /selects`, ephemeral: true });
                const FLAGS = {
                    one: `1️⃣`,
                    two: `2️⃣`,
                    three: `3️⃣`,
                    four: `4️⃣`,
                    five: `5️⃣`,
                    six: `6️⃣`

                }
                interaction.editReply(`${interaction.values[0]}: ${FLAGS[interaction.values[0]]}`);
            }
        }

    } else if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false });

        const command = bot.commands.get(interaction.commandName);
        if (!command) return await interaction.editReply({ content: `This is not a valid command!`, ephemeral: true });
        command.run(bot, interaction).catch(err => {
            console.log(err)
            interaction.editReply(`Something went wrong!`);
        });

    }


}