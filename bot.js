const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'wina') {
    	message.reply('Only being blonde left other than that always say... "Hello Biotefoul" (;');
  	}
});

client.on('message', message => {
    if (message.content === 'Fischi') {
    	message.reply('He is the real blonde abuser H5h5h5h5h5h5');
  	}
});

client.on('message', message => {
    if (message.content === 'Oliwia') {
    	message.reply('The Real Ape, A good quality fake blonde ape');
  	}
});

client.on('message', message => {
    if (message.content === 'Steven') {
    	message.reply('Two words, our HOMIE');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
