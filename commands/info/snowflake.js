const Discord = require('discord.js');
const functions = require('../../functions');
module.exports = {
    name: "snowflake",
    description: "Get snowflake info!",
    category: "info",
    commandOptions: [
        {
            type: 3,
            name: `snowflake`,
            description: `The Snowflake`,
            required: true
        }
    ],
    run: async (bot, interaction) => {
        if (!parseInt(interaction.options._hoistedOptions[0].value)) return await interaction.editReply(`That is not a valid snowflake!`);
        const snowflake = parseInt(interaction.options._hoistedOptions[0].value);
        const { date, timestamp, timestampms } = functions.toUnix(snowflake);
        const embed = new Discord.MessageEmbed()
        embed.setDescription(`Discord Snowflake ${snowflake}`);
        embed.setColor(global.config.botColor);
        embed.addFields(
            { name: `Date`, value: `${date.toUTCString()} (<t:${timestamp}:R>)`, inline: false },
            { name: `Unix`, value: `${timestampms}`, inline: false },
        );
        interaction.editReply({ embeds: [embed] });
    },
}