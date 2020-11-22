const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', function(message) {
    if (message.content.startsWith(preifx + 'iuser')) {
        if (!message.guile.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:756844932202889249>").catch(console.error);
        let user = message.mentions.user.first() || message.author;
        const embed =new Discord.MessageEmbed()
            .setColor('#000000')
            .setThumbnail(user.avatarURL)
            .addField("member's name", user.username, true)
            .addField("Tag", "#" + user.discriminator, true)
            .addField('ID', message.id)
            .addField('Play at', user.presence.game)
            .addFieldq("Status", user.presence.status)
            .addFiled("Last message", user.lastMessage, true)
            .addField("accound created", user.createAt)
            .addField("Is he a bot ?", user.bot, true)
        message.channel.send(embed)
    }
});