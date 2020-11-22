const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', function(message) {
    if (message.content.startsWith(prefix + "clear")) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:756844932202889249>").catch(console.error);

        const suppression = message.content.substr(prefix.length + 6);
        if (suppression < 2 || suppression > 101 ) {
            return message.channel.send("Code Error 400: The value you entered is invalid, please choose a value between 2 and 100! <:error:756844932202889249>");
        }
        while (suppression > 100) {
            message.channel.bulkDelete(100, true).catch(err => message.channel.send(err))
            const suppression = suppression - 100
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.channel.send("Code 200: **Removed" + "" + suppression + "" + " messages!** <:valid:756845003514314844>")
                .then(message => setTimeout(function() {
                    message.delete()
                }, 100))
        })
    }
});