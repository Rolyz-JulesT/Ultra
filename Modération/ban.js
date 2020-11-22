const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('../config.json');

client.login(token)

client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.guild.member(Message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Code Error 403: Vous n'avez pas la permission `BAN_MEMBERS` pour executer cet commande ! ").catch(connsole.error);
        const user = message.mentions.user.first();
        if(user) {
            const member = message.guild.member(user);
            if (member) {

                member.ban({
                    reason: "test",
                }).then(() => {
                    let messageArray = message.content.split(" ");
                    let args = messageArray.slice(1);
                    let rreason = args.join(" ").slice(22);
                    const embed = new Discord.MessageEmbed()
                        .setTitle('Ban')
                        .setColor("#000000")
                        .addField("Membre banni", user, true)
                        .addField("Modérateur", `${message.author}`, true)
                        .addField("Channel", message.channel)
                        .addField("Raison", rreason);


                    let logschannel = message.guild.channel.find(`name`, "logs");
                    if(!logschannel) return message.channel.send("Code Error 404: le salon `logs` n'est pas trouver !");

                    


                    logschannel.send(embed)
                    
                    return;
                }).catch(err => {
                    message.channel.send("Code error 501: Un erreur est survenu. Fait en sorte que le bot est la bonne hiérarchie !");
                    console.error(err);
                });
            } else {
                message.channel.send("Code error 403: Membre non trouvé !");
            }
        } else {
            message.channel.send("Code error 100: Mentionne un membre !")
        }
    }
});