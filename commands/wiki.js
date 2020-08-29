const { prefix, color } = require('../config.json');

module.exports = {
    name: 'wiki',
    cooldown: 5,
	execute(message, args) {
        var embed
        if (args.length!=0) { embed = {
            "title": "Search Minecraft Wiki",
            "description": `[Search Minecraft Wiki for \`${args.join(" ")}\`](https://minecraft.gamepedia.com/index.php?search=${args.join("+")})\n*Generated by <@${message.author.id}>*`,
            "color": color
        }} else {
            embed = {
                "title": "Search Minecraft Wiki",
                "description": `You need to say what you want to search for! Usage: \`${prefix}wiki [query]\`\n*Generated by <@${message.author.id}>*`,
                "color": color
            }
        }
        return message.channel.send({embed: embed})
        .catch(error => {
            console.error(`Could not give wiki link to ${message.author.tag}.\n`, error);
            message.reply('There was an error searching for that.');
        });
    },
};