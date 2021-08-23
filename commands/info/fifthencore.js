const Discord = require('discord.js');
const EPOCH = 1626300000;

module.exports = {
    name: "fifthencore",
    description: "Get fifth encore snowflake info!",
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
        const idToBinary = (num) => {
            let bin = '';
            let high = parseInt(num.slice(0, -10)) || 0;
            let low = parseInt(num.slice(-10));
            while (low > 0 || high > 0) {
                bin = String(low & 1) + bin;
                low = Math.floor(low / 2);
                if (high > 0) {
                    low += 5000000000 * (high % 2);
                    high = Math.floor(high / 2);
                }
            }
            return bin;
        }
        if (!parseInt(interaction.options._hoistedOptions[0].value)) return await interaction.editReply(`That is not a valid snowflake!`);
        const desconstruct = (snowflake) => {
            const BINARY = idToBinary(snowflake.toString()).toString(2).padStart(64, '0');
            let timestamp = parseInt(((parseInt(BINARY.substring(0, 42), 2) + EPOCH).toString().substring(0, (parseInt(BINARY.substring(0, 42), 2) + EPOCH).toString().length - 3)));
            let timestampms = parseInt(BINARY.substring(0, 42), 2) + EPOCH;
            const date = new Date(timestampms);
            const data = {
                snowflake,
                timestamp,
                timestampms,
                date,
                workerId: parseInt(BINARY.substring(42, 47), 2),
                processId: parseInt(BINARY.substring(47, 52), 2),
                increment: parseInt(BINARY.substring(52, 64), 2),
                binary: BINARY,
            }
            return data
        }

        const snowflake = parseInt(interaction.options._hoistedOptions[0].value);
        const data = desconstruct(snowflake);
        const embed = new Discord.MessageEmbed()
        embed.setDescription(`Fifth Encore Snowflake ${snowflake}`);
        embed.setColor(global.config.botColor);
        embed.addFields(
            { name: `Date`, value: `${data.date.toUTCString()} (<t:${data.timestamp}:R>)`, inline: false },
            { name: `workerId`, value: `${data.workerId}`, inline: false },
            { name: `processId`, value: `${data.processId}`, inline: false },
            { name: `increment`, value: `${data.increment}`, inline: false },
        );
        interaction.editReply({ embeds: [embed] });
    },
}