/* BOILERPLATE */

export default function getArgVFlags(prefix = '--') {
	const length = prefix.length;

	const [, , ...args] = process.argv;

	let name;
	return args.reduce((acc, cur) => {
		if (cur.substring(0, length) === prefix) {
			name = cur.substring(length);
			acc[name] = true;
		} else if (name) {
			acc[name] = cur;
			name = null;
		}
		return acc;
	}, {});
}
