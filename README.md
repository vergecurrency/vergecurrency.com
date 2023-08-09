[![VergeCurrency](https://raw.githubusercontent.com/vergecurrency/vergecurrency.com/master/static/img/verge-github-badge.png)](https://github.com/vergecurrency/vergecurrency.com)
[![Build Status](https://travis-ci.com/vergecurrency/vergecurrency.com.svg?branch=master)](https://travis-ci.com/vergecurrency/vergecurrency.com) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vergecurrency/vergecurrency.com)

# Vergecurrency.com

The lightning fast Verge website built with NextJS on top of ReactJS.

## Prerequisites

You need the following prerequisites to be able to both install and get the project running on your local machine.

### Mac:

Open your preferred terminal and install the following packages in the correct order.

_Homebrew:_

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

_NodeJS:_

```
brew install node
```

_Yarn:_

```
brew install yarn
```

### Windows:

_Git_

```
Download the Windows installer here:
https://git-scm.com/download/win
```

_NodeJS:_

```
Download the Windows installer here:
https://nodejs.org/en/download/
```

_Yarn:_

```
Download the Windows installer here:
https://yarnpkg.com/lang/en/docs/install/
```

### Linux:

**Ubuntu/Debian**

_NodeJS:_

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

_Yarn:_

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## Installing

Use your favorite terminal to get up and running by following the next steps:
_Note: Windows users will need to launch Git Bash to install Yarn dependencies successfully._

_Clone the project into a directory on your machine:_

```
git clone https://github.com/vergecurrency/vergecurrency.com.git
```

_Cd into the newly created directory:_

```
cd vergecurrency.com
```

_If you have a different version of NodeJS, use Node Version Manager:_

[NVM instructions](https://github.com/nvm-sh/nvm)

```
Example, nvm use v10.15.3
```

Or using .nvmrc

```
nvm use
```

_Install dependencies:_

```
yarn install
```

_Run the application:_

```
yarn run dev
```

_Open the website in your browser:_

```
http://localhost:3000
```

## Running the tests

We have implemented 2 linters in this project.

### ESLint with AirBNB config

_ESLint a single file:_

```
./node_modules/.bin/eslint _filename_.js
```

_ESLint the pages_

```
./node_modules/.bin/eslint pages/**/*.js
```

_EsLint the whole project_

```
./node_modules/.bin/eslint */*.js
```

### Node SASS Lint

_Lint a single file_

```
./node_modules/.bin/sass-lint -c ./.sasslintrc './path/to/file.scss'
```

_Lint all the SCSS files_

```
./node_modules/.bin/sass-lint -c ./.sasslintrc '**/*.scss'
```

## Local deployment

We're using the NextJS build system. To build, just run the following command:

```
yarn run build
```

It will then build and export the whole project.

To run the build locally:

```
gulp
```

## Translations

### Folder structure

Make sure you only use the short name for languages. So for example the folder name for the English language is `en`, Russian will be `ru` and France will be `fr`. If you would use a folder name that has a different name it will not work. So for example `en-GB` wouldn't work. If you feel this is a thing that we should allow, then please contact me on Discord (StanFaas).

### New translations

When adding a new language to our locales folder you should make sure to add the language code (folder name) to the `languages.json` file.
This file can be found in: `./lists/languages.json`. Be aware that the language will be active directly after you add it to that file.

## Built With

- [NextJS](https://github.com/zeit/next.js/) - The SSR framework used
- [i18next](https://www.i18next.com/) - Used for translations
- [ESLint](https://eslint.org/) - Used for JavaScript linting
- [sass-lint](https://github.com/sasstools/sass-lint) - Used for SCSS linting
- [postcss-loader](https://github.com/postcss/postcss-loader) - Used for transforming styles with Webpack.
- [autoprefixer](https://github.com/postcss/autoprefixer) - Used to parse CSS and add vendor prefixes to rules by Can I use.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Stan Faas** - _Main developer_ - [StanFaas](https://github.com/StanFaas)
- **Edwin de Boer** - _Main developer_ - [EdwinB89](https://github.com/EdwinB89)
- **Max1us** - _Developer / Maintainer_ - [Max1us](https://github.com/Max1us)
- **Waveon3** - _Webdesigns_ - [Waveon3](https://reddit.com/user/waveon3)

See also the list of [contributors](CONTRIBUTING.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
