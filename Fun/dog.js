const Discord = require('discord.js')
const client = new Discord.Client()
const { get } = require("snekfetch");
const { prefix, token } = require('../config.json');

client.login(token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + "dog") {

        try {
            get('https://random.dog/woof.json').then(res => {
                const embed = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setImage(res.body.url)
                    return message.channel.send({ embed });
            });
        } catch (err) {
            return message.channel.send(err.stack);
        }
    }
});