const fs = require(`fs`);
const { Util } = require('discord.js');

const loadEvents = async (bot) => {
    const eventsDir = `./` + `/events`;
    if (!fs.existsSync(eventsDir) || !fs.lstatSync(eventsDir).isDirectory())
        throw new Error(`Could not find events directory! (should be in "./events")`);

    for (const category of fs.readdirSync(`./` + `/events`)) {
        const categoryPath = `./` + `/events/` + category;
        if (!fs.lstatSync(categoryPath).isDirectory()) continue;
        for (const eventName of fs.readdirSync(categoryPath)) {
            if (!eventName.endsWith(`.js`)) continue;
            const eventHandler = require(`./events/` + category + `/` + eventName);

            bot.on(eventName.split(`.`)[0], eventHandler.bind(null, bot));
        }
    }
};

const loadCommands = async (bot) => {

    bot.api.applications(`868081924487389184`).guilds(`792753972255260702`).commands.post({
        data: {
            name: `Click This`,
            type: 3

        }
    });

    fs.readdirSync("./commands/").map(async (dir) => {
        //const commands = 
        fs.readdirSync(`./commands/${dir}/`).map((cmd) => {
            let pull = require(`./commands/${dir}/${cmd}`);

            let command = pull;
            bot.commands.set(pull.name, pull);

            bot.api.applications(`868081924487389184`).guilds(`792753972255260702`).commands.post({
                data: {
                    name: command.name,
                    description: command.description,
                    options: command.commandOptions,
                    default_permission: true

                }
            }).then(console.log(`Loaded command ${command.name}`));
        });



    });
}
const toUnix = async (snowflake) => {
    const EPOCH = 1420070400000;
    const BINARY = Util.idToBinary(snowflake.toString()).toString(2).padStart(64, '0');
    let timestamp = parseInt(((parseInt(BINARY.substring(0, 42), 2) + EPOCH).toString().substring(0, (parseInt(BINARY.substring(0, 42), 2) + EPOCH).toString().length - 3)));
    let timestampms = parseInt(BINARY.substring(0, 42), 2) + EPOCH;
    const date = new Date(timestampms);
    const data = {
        timestamp,
        timestampms,
        date
    }
    return data

}

module.exports.loadEvents = loadEvents;
module.exports.loadCommands = loadCommands;
module.exports.toUnix = toUnix;