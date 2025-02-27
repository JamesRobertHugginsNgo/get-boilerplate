import showUsage from '../src/show-usage.js';

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
