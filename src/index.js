import * as Fs from 'node:fs/promises';
import * as Path from 'node:path';

export default async function getBoilerplate(url, filePath = Path.basename(url)) {
	if (!url) {
		throw 'Missing argument(s)';
	}

	const rawUrlArray = url.split('/');
	if (rawUrlArray[2] === 'github.com') {
		rawUrlArray[2] = 'raw.githubusercontent.com';
		rawUrlArray.splice(5, 1);
		url = rawUrlArray.join('/');
	}

	const response = await fetch(url);
	if (response.status !== 200) {
		throw 'Invalid status';
	}

	const temp = await response.text();

	let first = true;
	const text = temp.replace(/^(\s*\/\*\s*BOILERPLATE).*?(\*\/?\s*?)(\r\n|\r|\n)?$/gm, (match, p1, p2, p3) => {
		if (first) {
			first = false;

			const urlArray = url.split('/');
			if (urlArray[2] === 'raw.githubusercontent.com') {
				urlArray[2] = 'github.com';
				urlArray.splice(5, 0, 'blob');

				return `${p1}: ${url} ${p2}\n${p1}: ${urlArray.join('/')} ${p2}\n`;
			} else {
				return `${p1}: ${url} ${p2}\n`;
			}
		} else {
			return '';
		}
	});

	try {
		await Fs.access(Path.dirname(filePath));
	} catch {
		await Fs.mkdir(Path.dirname(filePath), { recursive: true });
	}

	try {
		await Fs.access(filePath);
		throw 'File already exists';
	} catch (error) {
		if (error === 'File already exists') {
			throw error;
		}
	}

	await Fs.writeFile(filePath, text, { encoding: 'utf-8' });
}
