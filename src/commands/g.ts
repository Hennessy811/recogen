import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as inquirer from 'inquirer';
import * as fs from 'fs-extra';
import * as defaultTemplates from '../templates/default';

const writeTemplates = ({
	name,
	style,
	useTS
}: {
	name: string;
	style: '.scss' | '.sass' | '.less' | '.css' | 'no styles';
	useTS: boolean;
}) => {
	const extension = useTS ? 'ts' : 'js';
	fs.mkdirSync(`./${name}`);

	fs.writeFileSync(
		`./${name}/${name}.${extension}x`,
		defaultTemplates.component({ name, withStyles: style !== 'no styles' })
	);

	fs.writeFileSync(
		`./${name}/index.${extension}`,
		defaultTemplates.index({ name })
	);

	if (style !== 'no styles') {
		fs.writeFileSync(
			`./${name}/${name}.module${style}`,
			defaultTemplates.styles()
		);
	}
};

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Generate extends Command {
	static description = 'Generate React components';

	static examples = [
		`$ genrc g
    Enter component name?: MyComponent
    ? Select styling module: (Use arrow keys)
    > .less
      .scss
      .css
      no styles
    Use TypeScript? (Y/n)
    Generating...... done
`
	];

	static flags = {
		help: flags.help({ char: 'h' })
		// flag with a value (-n, --name=VALUE)
		// name: flags.string({ char: 'n', description: 'name to print' }),
	};

	// static args = [{ name: 'file' }];

	async run() {
		const { args, flags } = this.parse(Generate);

		let name: string = await cli.prompt('Enter component name?');

		name = name.trim();

		if (name.split(' ').length !== 1 || capitalizeFirstLetter(name) !== name) {
			this.error('Component name should be one-worded and upper-cased');
			return 0;
		}

		const responses = await inquirer.prompt([
			{
				name: 'styles',
				message: 'Select styling module:',
				type: 'list',
				choices: [
					{ name: '.less' },
					{ name: '.scss' },
					{ name: '.css' },
					{ name: 'no styles' }
				]
			},
			{
				name: 'useTS',
				message: 'Use TypeScript?',
				type: 'confirm',
				default: true
			}
		]);

		cli.action.start('Generating...');
		writeTemplates({
			name,
			style: responses['styles'],
			useTS: responses['useTS']
		});
		cli.action.stop();
		this.log(`
    '${name}' component generated. Styles - '${responses['styles']}' | Use TS: ${responses['useTS']}
    `);
	}
}
