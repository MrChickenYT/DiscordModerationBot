const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Pong!'),
    run: ({ interaction, client, handler }) => {
        interaction.reply('Pong!');
    },
    options: {
        //copy paste these perms
    
        //devOnly: true,
        //userPermissions: ['Administrator'],
        //botPermissions: ['BanMaembers'],
        //deleted: true,
    },
};