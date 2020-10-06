interface ComponentProps {
	name: string;
	withStyles?: boolean;
}

export const component = ({ name, withStyles = true }: ComponentProps) => {
	return `
import React from 'react';
${withStyles ? `import styles from './${name}.module.scss';` : ''}

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
