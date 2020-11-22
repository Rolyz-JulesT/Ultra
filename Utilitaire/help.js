const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', message => {
    if (message.content === prefix + "help") {
        const embed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setDescription('Pour executé les commandes, faite ``*<nom de la commande>``')
            .addField("**Utilitaire**", "``help`` - ``ping``\n``membercount`` - ``iserveur``\n``avatar``", true)
            .addField("**Modération**", "``ban`` - ``kick`` - ``clear``\n``iuser``", true)
            .addField("**fun**, ``dog`` - ``8ball`` - ``kiss`` - ``hug`` - ``pepe``")
        message.channel.send(embed)
    }
});