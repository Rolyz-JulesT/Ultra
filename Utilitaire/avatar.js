const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', message => {
    if(message.content === prefix + 'avatar') {
        message.reply(message.author.displayAvatarURL());
    }
});
