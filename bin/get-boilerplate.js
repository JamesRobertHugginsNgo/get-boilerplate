#! /usr/bin/env node

import getArgVFlags from '../src/get-argv-flags.js';
import getBoilerplate from '../src/index.js';
import showUsage from '../src/show-usage.js';

const [, , url] = process.argv;
const { f, file, h, help } = getArgVFlags();

if (h || help) {
	showUsage(
		'Download boilerplate from URL and save to file.',
		[
			'npx get-boilerplate <url> [(--f | --file) <file>]',
			'npx get-boilerplate (--h | --help)'
		],
		{
			'<url>': 'Boilerplate URL to a text file or GitLab page.',
			'(--f | --file) <file>': 'Download target. Default value is based on the Boilerplate URL.',
			'--h | --help': 'Help flag to display description and usage information.'
		}
	)
	process.exit(0);
}

await getBoilerplate(url, f || file);
