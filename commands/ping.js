const config = require('../config.json');

module.exports = {
	name: "ping",
	description: "ping pong",
	async execute(message, args) {
		message.reply('pong!');
	},
};