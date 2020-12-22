import { StylesType } from '../commands/g';

interface ComponentProps {
	name: string;
	style?: StylesType;
	useModules?: boolean;
}

export const component = ({
	name,
	style,
	useModules
}: ComponentProps): string => {
	let styles = '';
	if (style !== 'no styles' && style !== null && useModules)
		styles = `import styles from './${name}.module${style}';`;

	if (styles && style !== 'no styles') {
		styles = `import './styles${style}';`;
	}

	return `
import React from 'react';
${styles}

const ${name} = () => {
  return (
    <div>
      ${name} component works
    </div>
  )
}

export default ${name}
  `;
};

export const styles = () => ``;

export const index = ({ name }: ComponentProps) => {
	return `
export {default} from './${name}'
  `;
};
