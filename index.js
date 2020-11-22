const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');

const { prefix, token } = require('./config.json');

client.login(token)

client.commands = new Enmap();

fs.readdir("./Fun/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Fun/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[ LOADING ] [ COMMANDES ] ${commandName}`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./Modération/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Modération/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[ LOADING ] [ COMMANDES ] ${commandName}`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./Utilitaire/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Utilitaire/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[ LOADING ] [ COMMANDES ] ${commandName}`);
        client.commands.set(commandName, props);
    });
});