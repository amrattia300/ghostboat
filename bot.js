const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'wina') {
    	message.reply('Only being blonde left other than that always say... "Hello Biotefoul" :kekw:');
  	}
});

client.on('message', message => {
    if (message.content === 'Fischi') {
    	message.reply('He is the real blonde abuser :kekcam:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
