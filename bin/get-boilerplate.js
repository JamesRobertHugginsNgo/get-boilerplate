#! /usr/bin/env node

import getArgVFlags from '../src/get-argv-flags.js';
import getBoilerplate from '../src/index.js';
import showUsage from '../src/show-usage.js';

const [, , url] = process.argv;
const { h, help } = getArgVFlags();

if (h || help) {
	showUsage(
		'A Node CLI tool for downloading boilerplates.',
		[
			'npx get-boilerplate <url>',
			'npx get-boilerplate (--h | --help)'
		],
		{
			'<url>': 'Boilerplate URL to a text file or GitLab page.',
			'--h | --help': 'Help flag to display description and usage information.'
		}
	);
	process.exit(0);
}

await getBoilerplate(url);

