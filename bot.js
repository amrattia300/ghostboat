const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Wina') {
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
    	message.reply('The Real Ape, a good quality half-blonde ape');
  	}
});

client.on('message', message => {
    if (message.content === 'Steven') {
    	message.reply('Two words, our HOMIE (aka The Cockzilla)');
  	}
});

client.on('message', message => {
    if (message.content === 'Turtle') {
    	message.reply('"I am Turtle but I am not lost" he says, he trade gurls for living they say');
  	}
});

client.on('message', message => {
    if (message.content === 'Hamouti') {
    	message.reply('Take care ladies, Hamouti shot gurls down, pew pew');
  	}
});

client.on('message', message => {
    if (message.content === 'Max') {
    	message.reply('The one and only Ape Trader, CEO and Founder of Ape Trading Co.');
  	}
});

client.on('message', message => {
    if (message.content === 'Papryka') {
    	message.reply('y!hug everyone, come here habibos');
  	}
});

client.on('message', message => {
    if (message.content === 'Bullets') {
    	message.reply('PEW PEW... LATA BITCH');
  	}
});

client.on('message', message => {
    if (message.content === 'Ahmed') {
    	message.reply('Aka Michael');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
