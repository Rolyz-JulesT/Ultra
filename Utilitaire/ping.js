const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        const ping = Date.now() - message.createdTimestamp + " ms";
        const embed = new Discord.Message.Embed()
            .setColor('#000000')
            .setDescription(`Latency: ${Date.now() - message.createdTimestamp} ms`)
        message.channel.send(embed)
    }
})