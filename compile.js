const path = require('path');
const fs = require('fs');
const solc = require('solc');

const notesPath = path.resolve(__dirname, 'contracts', 'Notes.sol');
const source = fs.readFileSync(notesPath, 'utf8');

const input = {
	language: 'Solidity',
	sources: {
		'Notes.sol': {
			content: source,
		},
	},
	settings: {
		outputSelection: {
			'*': {
				'*': ['*'],
			},
		},
	},
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Notes.sol'].Notes;
