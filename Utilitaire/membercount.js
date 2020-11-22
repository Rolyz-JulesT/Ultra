const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', message => {
    if (message.content === prefix + "membercount") {
        const serveur_size =message.guild.membercount
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`Nous sommes ${serveur_size} membre actuellement !`)
    message.channel.send(embed);
    }
})