/* BOILERPLATE */

function fixLength(str, minLength = 16) {
	return `${str}${str.length < minLength ? ' '.repeat(minLength - str.length) : ''}`;
}

export default function showUsage(description, usage, options) {
	console.log();

	if (description) {
		console.log(description);
		console.log();
	}

	if (usage) {
		if (Array.isArray(usage)) {
			console.group('USAGE:');
			for (const item of usage) {
				console.log(item);
			}
			console.groupEnd();
			console.log();
		} else {
			console.log('USAGE:', usage);
			console.log();
		}
	}

	if (options) {
		console.group('OPTIONS:');
		for (const key in options) {
			console.log(fixLength(key), ' ', options[key]);
		}
		console.groupEnd();
		console.log();
	}
}
