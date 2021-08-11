module.exports = {
    name: "source",
    description: "I'm open source GUYS!",
    category: "botinfo",
    run: async (bot, interaction) => {
        interaction.editReply(`[click here to see the github](https://github.com/PieterSpruijt/ToolsBot)`);
    },
}