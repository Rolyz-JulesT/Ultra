const Discord = require('discord.js')
const client = new Discord.Client()

const { prefix, token } = require('../config.json');

client.login(token)

function doMagic8BallVoodoo() {
    let rand = ['**Oui**', '**Non**', '**Tu voulais essayer quoi ?**', "**Qu'est-ce que penses ? Non**", '**Peut être**', '**Jamais**', '**Ouaip**'];

    return rand[Math.floor(Math.random() * rand.length)]
}

client.on('message', message =>{
    if (message.content.startsWith(prefix + "8ball")) {
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .addField("**Votre réponse est:**", doMagic8BallVoodoo())
    message.channel.send(embed)
    }
});