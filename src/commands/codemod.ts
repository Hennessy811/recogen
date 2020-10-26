import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as inquirer from 'inquirer';
import * as fs from 'fs-extra';
import * as defaultTemplates from '../templates/default';
import { getConfig } from '../utils/get-config';
import kek from '../../components/Kek';
import { Config } from './g';

export default class Generate extends Command {
	static description =
		'Allow you to modify existing components to fit project-level config';

	static examples = [
		`$ recogen codemod ./Card
    /** ./Card contents
     *    - index.(jsx|tsx|js|ts)
     *    - styles.(less|css|sass)
     */
Generating...... done
`,
		`$ recogen codemod ./Card.jsx
Generating...... done
`
	];

	static flags = {
		help: flags.help({ char: 'h' }),
		file: flags.string({
			char: 'f',
			description: 'Path to target file'
		}),
		dir: flags.string({
			char: 'd',
			description: 'Path to target directory'
		})
	};

	createFiles(
		name: string,
		config: Config,
		componentContent: string,
		relPath = './',
		createFolder = true
	): void {
		const { useTS } = config;
		const extension = useTS ? 'ts' : 'js';
		createFolder && fs.mkdirSync(`${relPath}/${name}`);

		fs.writeFileSync(
			`${relPath}/${name}/${name}.${extension}x`,
			componentContent
		);

		fs.writeFileSync(
			`${relPath}/${name}/index.${extension}`,
			defaultTemplates.index({ name })
		);
	}

	modFile(flags, config) {
		const relPath = flags.file
			.split('/')
			.slice(0, flags.file.split('/').length - 1)
			.join('/');
		const fileContent = fs.readFileSync(`./${flags.file}`, {
			encoding: 'utf8'
		});
		const match = fileContent.match(/export default (\w+)/);
		if (!match) this.error('No named export found in given file');
		if (match[1] === 'function') {
			this.error('Unnamed export found, exiting...');
		}
		const name = match[1];
		this.createFiles(name, config, fileContent, relPath);
		this.log('Files created successfully');
	}

	async run() {
		const { args, flags } = this.parse(Generate);

		const [config] = getConfig();

		console.log(config, flags);
		if (!config) {
			this.error('No config file .recogenrc found, exiting...');
		}
		if (flags.file && flags.dir) {
			this.error(
				'There must be only one type of args: single file, or directory'
			);
		}
		if (!flags.file && !flags.dir) this.error('No input found, exiting...');

		if (flags.file) {
			this.modFile(flags, config);
		}
		if (flags.dir) {
			const relPath = flags.dir
				.split('/')
				.slice(0, flags.dir.split('/').length - 1)
				.join('/');
			const dirContent = fs.readdirSync(`./${flags.dir}`, {
				encoding: 'utf8'
			});

			const indexFileName = dirContent.find((i) => i.includes('index'));
			const filePath = `./${flags.dir}/${indexFileName}`;
			const fileContent = fs.readFileSync(filePath, {
				encoding: 'utf8'
			});

			const match = fileContent.match(/export default (\w+)/);
			if (!match) this.error('No named export found in given file');
			if (match[1] === 'function') {
				this.error('Unnamed export found, exiting...');
			}
			const name = match[1];
			this.createFiles(name, config, fileContent, relPath, false);
			fs.removeSync(filePath);
			this.log('Files created successfully');
		}

		return 0;
	}
}
