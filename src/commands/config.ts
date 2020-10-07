import { Command, flags } from '@oclif/command';
import * as fs from 'fs-extra';
import { getConfig } from '../utils/get-config';

export default class Generate extends Command {
	static description =
		'Create config file in project directory at package.json level';

	static examples = [
		`$ recogen config
Config file created successfully at ../.././.recogenrc
`
	];

	static flags = {
		help: flags.help({ char: 'h' })
	};

	async run() {
		const [configContent, rootDir] = getConfig();

		if (configContent) {
			this.log(`Located config file at package.json level`);
		} else {
			fs.writeFileSync(
				`${rootDir}/.recogenrc`,
				JSON.stringify({
					styles: '.less',
					useTS: false,
					useModules: false
				})
			);
			this.log(`Config file created successfully at ${rootDir}.recogenrc`);
		}
		this.log('Done');

		return 0;
	}
}
