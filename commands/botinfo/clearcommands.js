module.exports = {
    name: "clearcommands",
    description: "Get bot & API speed!",
    category: "botinfo",
    run: async (bot, interaction) => {
        if (interaction.user.id != `628205772509151240`) return await interaction.editReply(`You don't have permission to do this`);
        await interaction.followUp(`Deleted all commands!`);
        let commands = await interaction.guild.commands.fetch();
        commands.forEach(async (command) => {
            bot.api.applications(`868081924487389184`).guilds(`792753972255260702`).commands(command.permissions.commandId).delete();
        }).catch(() => { });

    },
}