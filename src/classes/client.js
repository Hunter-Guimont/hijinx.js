const Discord = require('discord.js');

const fs = require('fs');


/**
 * Hijinx's custom client
 * @extends Discord.Client
 */
class Client extends Discord.Client {

	/**
	 * Create a new client
	 * @param {Object} config
	 * @param {ClientOptions} options
	 */
	constructor(config, options = {}) {

		super(options);

		/**
		 * Command prefix
		 * @type {string}
		 */
		this.prefix = config.prefix;

		/**
		 * Login token
		 * @type {string}
		 */
		this.token = config.token;

		/**
		 * Hijinx's owner
		 * @type {string}
		 */
		this.owner = config.ownerId;
	}

	/**
	 * Loads all available events
	 * @param {string} path
	 */
	loadEvents() {
		const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
		for (const file of eventFiles) {
			const event = require(`../events/${file}`);
			const eventName = file.split('.')[0];
			super.on(eventName, event.bind(null, this));
			delete require.cache[require.resolve(`../events/${file}`)];
		}
	}

	/**
	 * Loads all available commands
	 * @param {string} path
	 */
	loadCommands() {
		this.commands = new Discord.Collection();

		const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
		for (const file of commandFiles) {
			const command = require(`../commands/${file}`);
			this.commands.set(command.name, command);
		}
	}
}

module.exports = Client;