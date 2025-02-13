#! /usr/bin/env node

import getArgVFlags from '../src/get-argv-flags.js';
import getBoilerplate from '../src/index.js';

const { url, file } = getArgVFlags();
await getBoilerplate(url, file);
