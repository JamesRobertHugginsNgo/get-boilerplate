/* BOILERPLATE */

export default function fixLength(str, { minLength = 16 } = {}) {
	return `${str}${str.length < minLength ? ' '.repeat(minLength - str.length) : ''}`;
}
