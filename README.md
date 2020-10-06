genrc
=====

Generate React components by templates nice and easy

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/genrc.svg)](https://npmjs.org/package/genrc)
[![CircleCI](https://circleci.com/gh/Hennessy811/genrc/tree/master.svg?style=shield)](https://circleci.com/gh/Hennessy811/genrc/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/genrc.svg)](https://npmjs.org/package/genrc)
[![License](https://img.shields.io/npm/l/genrc.svg)](https://github.com/Hennessy811/genrc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g genrc
$ genrc COMMAND
running command...
$ genrc (-v|--version|version)
genrc/0.1.1 darwin-x64 node-v12.18.4
$ genrc --help [COMMAND]
USAGE
  $ genrc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`genrc g`](#genrc-g)
* [`genrc help [COMMAND]`](#genrc-help-command)

## `genrc g`

Generate React components

```
USAGE
  $ genrc g

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ genrc g
       Enter component name?: MyComponent
       ? Select styling module: (Use arrow keys)
       > .less
         .scss
         .css
         no styles
       Use TypeScript? (Y/n)
       Generating...... done
```

_See code: [src/commands/g.ts](https://github.com/Hennessy811/genrc/blob/v0.1.1/src/commands/g.ts)_

## `genrc help [COMMAND]`

display help for genrc

```
USAGE
  $ genrc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
