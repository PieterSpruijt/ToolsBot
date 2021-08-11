const functions = require('../../functions');

module.exports = async function (bot) {
    functions.loadCommands(bot).then(() => {
        console.log(`${bot.user.tag} is ready!`);
    });

}