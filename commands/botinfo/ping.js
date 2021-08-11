module.exports = {
    name: "ping",
    description: "Get bot & API speed!",
    category: "botinfo",
    run: async (bot, interaction) => {
        interaction.editReply(`The bot ping is ${Math.round(bot.ws.ping)} ms`);
    },
}