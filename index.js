require('dotenv/config');
const { Client } = require('discord.js');

const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent']
});

client.on('ready', () =>{
    console.log('protea is online');
})


const IGNORE_PREFIX = "!";
const CHANNELS = ['1120709377112936504','1120709377112936505','1120709377112936500','1120709377112936501'];


//this fires off an event when a message is created
client.on('messageCreate', (message) =>{
    if (message.author.bot)return;
    if (message.content.startsWith(IGNORE_PREFIX)) return;
    if (!CHANNELS.includes(message.channelId) && !message.mentions.users.has(client.user.id)) return;


})
client.login(process.env.TOKEN); 

