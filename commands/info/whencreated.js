const Discord = require('discord.js');
const functions = require('../../functions');
module.exports = {
    name: "whencreated",
    description: "Get when a user/channel is created!",
    category: "info",
    commandOptions: [
        {
            name: "user",
            description: "Get when a account is created!",
            type: 1,
            options: [
                {
                    type: 6,
                    name: `user`,
                    description: `The user`,
                    required: true
                }
            ]
        },
        {
            name: "channel",
            description: "Get when a channel is created!",
            type: 1,
            options: [
                {
                    type: 7,
                    name: `channel`,
                    description: `The channel`,
                    required: true
                }
            ]
        },
        {
            name: "snowflake",
            description: "Get when a Discord snowflake is created (channel/guild/message/user ID)!",
            type: 1,
            options: [
                {
                    type: 3,
                    name: `snowflake`,
                    description: `The Discord snowflake`,
                    required: true
                }
            ]
        }
    ],
    run: async (bot, interaction) => {
        const command = interaction.options._subcommand;
        if (command === `user`) {
            let user = interaction.options._hoistedOptions[0].user;
            const { timestamp } = (functions.toUnix(user.id));
            await interaction.editReply(`**${user.tag}**'s account is created at <t:${timestamp}> (<t:${timestamp}:R>)`);

        } else if (command === `channel`) {
            let channel = interaction.options._hoistedOptions[0].channel;
            const { timestamp } = (functions.toUnix(channel.id));
            await interaction.editReply(`<#${channel.id}> is created at <t:${timestamp}> (<t:${timestamp}:R>)`);

        } else if (command === `snowflake`) {
            if (!parseInt(interaction.options._hoistedOptions[0].value)) return await interaction.editReply(`That is not a valid snowflake!`);
            const snowflake = parseInt(interaction.options._hoistedOptions[0].value);
            const { timestamp, timestampms } = functions.toUnix(snowflake);
            const embed = new Discord.MessageEmbed()
            embed.setDescription(`Discord Snowflake ${snowflake}`);
            embed.setColor(global.config.botColor);
            embed.addFields(
                { name: `Date`, value: `<t:${timestamp}> (<t:${timestamp}:R>)`, inline: false },
                { name: `Unix`, value: `${timestampms}`, inline: false },
            );
            interaction.editReply({ embeds: [embed] });
        }
    },
}