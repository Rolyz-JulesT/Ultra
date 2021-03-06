const Discord = require('discord.js')
const client = new Discord.Client()
const { get } = require("snekfetch")
const { prefix, token } = require('../config.json');

client.login(token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if(message.content === prefix + "kiss") {
        if (message.mentions.users.size < 1) {
            return message.reply("**Erreur 403: Vous n'avez mentionnée aucun membre !**")
        }

        try {
            get('https://nekos.life/api/kiss').then(res => {
                const embed = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setDescription(`💞 ${message.mentions.users.first()}`)
                    .setImage(res.body.url)
                return message.channel.send({ embed });
            })
        } catch (err) {
            return message.channel.send(err.stack);
        }
    }
});