/// <reference path="../types/docker-file-parser/index.d.ts" />

import * as parser from 'docker-file-parser';
import { readFileSync } from 'fs';

if (!process.argv[2]) {
    throw new Error('no file provided');
}

const fileContents = readFileSync(process.argv[2], 'utf-8');

console.log(parser.parse(fileContents, { includeComments: true }));
