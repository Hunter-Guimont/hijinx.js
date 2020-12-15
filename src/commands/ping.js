const { Channel } = require("discord.js");

module.exports = {
	name: 'ping',
	description: "Show the bot's average latency.",
	cooldown: 10,
	execute(message) {
	  message.channel.send(`Average latency: ${Math.round(message.client.ws.ping)} ms`);
	}
  };