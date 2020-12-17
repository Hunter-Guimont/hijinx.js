module.exports = (client, message) => {
	// Check if user is a bot
	if (message.author.bot) return;

	// Check for prefix
	if (!message.content.startsWith(client.prefix)) return;

	// Standard command/argument definition
	// const { commandName, ...args } = message.content.split();
	const args = message.content.slice(client.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Get command data from client.commands
	const command = client.commands.get(commandName);

	// If not found, return silently
	if (!command) return;

	// Run the command
	command.execute(message, args);
};
