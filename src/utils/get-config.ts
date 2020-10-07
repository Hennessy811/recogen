import * as fs from 'fs-extra';
import { Config } from '../commands/g';

const searchRoot = (path: string): string => {
	let rootDir = '';
	const files = fs.readdirSync(path);
	const fileFound = files.find((i) => i === 'package.json');
	if (fileFound) {
		rootDir = path;
	} else {
		rootDir = searchRoot(`../${path}`);
	}
	return rootDir;
};

export const getConfig = (): [Config | null, string] => {
	const rootDir = searchRoot('./');
	try {
		const configContent = fs.readFileSync(`${rootDir}/.recogenrc`, {
			encoding: 'utf8'
		});
		const parsedContent = JSON.parse(configContent) as Config;
		return [parsedContent, rootDir];
	} catch (error) {
		return [null, rootDir];
	}
};
