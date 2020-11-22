const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('../config.json');

client.login(token)

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if(message.content === prefix + "pepe") {
        const pepe1 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556352915505165.png?v=1");

        const pepe2 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1");

        const pepe3 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556486235389973.png?v=1");

        const pepe4 = new Discord.Message.Embed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556308929576960.png?v=1");

        const pepe5 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556295218659329.png?v=1");

        const pepe6 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556467021545473.png?v=1");

        const pepe7 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556448507625474.png?v=1");

        const pepe8 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556377754042378.png?v=1");

        const pepe9 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556281767526405.png?v=1");

        const pepe10 = new Discord.MessageEmbed()
            .setColor("#000000")
            .setImage("https://cdn.discordapp.com/emojis/428556266366042112.png?v=1");

        const pepes = [pepe1, pepe2, pepe3, pepe4, pepe5, pepe6, pepe7, pepe8, pepe9, pepe10]
        const dapepe = nath.floor((math.random() * pepes.length));

        message.channel.send(pepes[dapepe])

    }    
});