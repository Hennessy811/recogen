# recogen

Generate React components by templates nice and easy

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/recogen.svg)](https://npmjs.org/package/recogen)
[![CircleCI](https://circleci.com/gh/Hennessy811/recogen/tree/master.svg?style=shield)](https://circleci.com/gh/Hennessy811/recogen/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/recogen.svg)](https://npmjs.org/package/recogen)
[![License](https://img.shields.io/npm/l/recogen.svg)](https://github.com/Hennessy811/recogen/blob/master/package.json)

<!-- toc -->
* [recogen](#recogen)
* [Usage](#usage)
* [Commands](#commands)
* [Contact me for any help:](#contact-me-for-any-help)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g recogen
$ recogen COMMAND
running command...
$ recogen (-v|--version|version)
recogen/0.3.1 darwin-x64 node-v14.13.1
$ recogen --help [COMMAND]
USAGE
  $ recogen COMMAND
...
```
<!-- usagestop -->

### Config `.recogenrc` should look like:

```
{
  "styles": ".less", // | ".sass" | ".css" | "no styles"
  "useTS": true, // use TypeScript
  "useModules": true // use CSS Modules feature
}
```

# Commands

<!-- commands -->
* [`recogen codemod`](#recogen-codemod)
* [`recogen config`](#recogen-config)
* [`recogen g`](#recogen-g)
* [`recogen help [COMMAND]`](#recogen-help-command)

## `recogen codemod`

Allow you to modify existing components to fit project-level config

```
USAGE
  $ recogen codemod

OPTIONS
  -d, --dir=dir    Path to target directory
  -f, --file=file  Path to target file
  -h, --help       show CLI help

EXAMPLES
  $ recogen codemod ./Card
       /** ./Card contents
        *    - index.(jsx|tsx|js|ts)
        *    - styles.(less|css|sass)
        */
  Generating...... done

  $ recogen codemod ./Card.jsx
  Generating...... done
```

_See code: [src/commands/codemod.ts](https://github.com/Hennessy811/recogen/blob/v0.3.1/src/commands/codemod.ts)_

## `recogen config`

Create config file in project directory at package.json level

```
USAGE
  $ recogen config

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ recogen config
  Config file created successfully at ../.././.recogenrc
```

_See code: [src/commands/config.ts](https://github.com/Hennessy811/recogen/blob/v0.3.1/src/commands/config.ts)_

## `recogen g`

Generate React components

```
USAGE
  $ recogen g

OPTIONS
  -h, --help          show CLI help
  -i, --ignoreConfig  Allow you to create component without looking for project-level config

EXAMPLE
  $ recogen g
       Enter component name?: MyComponent
       ? Select styling module: (Use arrow keys)
       > .less
         .scss
         .css
         no styles
       Use TypeScript? (Y/n)
       Generating...... done
```

_See code: [src/commands/g.ts](https://github.com/Hennessy811/recogen/blob/v0.3.1/src/commands/g.ts)_

## `recogen help [COMMAND]`

display help for recogen

```
USAGE
  $ recogen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->

# Contact me for any help:

- telegram: @Hennessy811
- email: mitia2022@gmail.com
