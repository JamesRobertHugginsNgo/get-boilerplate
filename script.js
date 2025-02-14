/* BOILERPLATE: https://raw.githubusercontent.com/JamesRobertHugginsNgo/get-ipv4/main/src/script.js */
/* BOILERPLATE: https://github.com/JamesRobertHugginsNgo/get-ipv4/blob/main/src/script.js */

import { networkInterfaces } from 'node:os';

export default function getIpv4() {
	const result = [];
	const nets = networkInterfaces();
	for (const name in nets) {
		for (const net of nets[name]) {
			const { family, internal } = net;
			if (internal || family !== 'IPv4') {
				continue;
			}
			result.push(net);
		}
	}
	return result;
}
