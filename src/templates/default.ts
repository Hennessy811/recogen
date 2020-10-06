import { StylesType } from '../commands/g';

interface ComponentProps {
	name: string;
	style?: StylesType;
}

export const component = ({ name, style }: ComponentProps): string => {
	const stylesStr =
		style === 'no styles'
			? ''
			: `import styles from './${name}.module${style}';`;

	return `
import React from 'react';
${stylesStr}

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
