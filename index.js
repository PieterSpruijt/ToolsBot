const Discord = require('discord.js');
const functions = require(`./functions`);
const config = require('./config');
const otherIntents = [
    Discord.Intents.FLAGS.GUILDS,
    //Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
];
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: otherIntents
});
bot.commands = new Discord.Collection();
functions.loadEvents(bot)
bot.login(config.botToken)