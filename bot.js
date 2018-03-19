const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("keith is gay")) {
               message.channel.send("I'm not gay. What the fuck?")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("sendak")) {
               message.channel.send("I punched Sendak!")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("Yeah, apparently after I emerged from a coma and shot his arm off.")) {
               message.channel.send("We had a bonding moment. I cradled you in my arms!")
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
