const config = require('../config.json');
const Client = require('./classes/client.js');


const client = new Client(config);

function init() {
	client.loadCommands();
	client.loadEvents();
	client.login(client.token);
}

init();

client.on('ready', () => {
	console.log(`Successfully logged in as ${client.user.tag}.`);
});
