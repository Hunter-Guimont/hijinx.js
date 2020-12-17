module.exports = {
	name: 'ping',
	description: 'Show the average latency to the API.',
	cooldown: 10,
	roles: ['788555610882965536'],
	execute(message) {
		message.channel.send(`Average Ping: ${message.client.ws.ping} ms`);
	},
};