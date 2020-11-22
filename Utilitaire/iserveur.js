const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

const verifLevels = ["Any", "Low", "Average", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

client.on('message', message => {
    if (message.content === prefix + "iserver") {
        const server_size = message.guild.members.size
        const embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .setThumbnail(message.guild.iconURL)
            .addField('Nom du Server', message.guild.name, true)
            .addField('ID du Server ', message.guild.id, true)
            .addField('Créateur du Server :', message.guild.owner)
            .addField('Humain', `${message.guild.members.filter(member => !member.user.bot).size}`, true)
            .addField('Bots', `${message.guild.members.filter(member => member.user.bot).size}`, true)
            .addField('Status des Membres', `<:online:756862841369133108> **${message.guild.members.filter(online => online.presence.status === 'online').size}** Online\n<:idle:756862851909681194> **${message.guild.members.filter(idle => idle.presence.status === 'idle').size}** Idle\n<:5765_Offline:756862869240414259> **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Dnd\n<:9819_Offline:756862869685010604> **${message.guild.members.filter(offline => offline.presence.status === 'offline').size}** Offline\n<:4944_Streaming:756862869160591438> **${message.guild.members.filter(streaming => streaming.presence.status === 'streaming').size}** Streaming`)
            .addField("Channels", message.guild.channels.size, true)
            .addField("Roles", message.guild.roles.size, true)
            .addField("Verification level", verifLevels[message.guild.verificationLevel])
        message.channel.send(embed)
    }
});
