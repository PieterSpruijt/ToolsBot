const functions = require('../../functions');

module.exports = async function (bot) {
    functions.loadCommands(bot).then(() => {
        console.log(`${bot.user.tag} is ready!`);
    });
    setTimeout(() => {
        bot.user.setStatus('invisible');
    }, 5000);
    setInterval(() => {
        bot.user.setStatus('invisible');
    }, 60000);

}