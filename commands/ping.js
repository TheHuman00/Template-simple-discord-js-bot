const config = require('../config.json');

module.exports = {
	name: "ping",
	description: "ping pong",
	execute(message, args) {
		message.reply('pong!');
	},
};