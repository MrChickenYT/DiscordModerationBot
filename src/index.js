require('dotenv/config');
const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandKit({
    client,
    devGuildIds: ['1196203352032288908'],
    devUserIds: ['988877953721069628'],
    devRoleIds: ['1175504009126232125'],    
    eventsPath:`${__dirname}/events`,
    commandsPath:`${__dirname}/commands`,
    bulkRegister: true,
});
client.login(process.env.TOKEN);
