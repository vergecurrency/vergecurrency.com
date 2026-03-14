[![VergeCurrency](https://raw.githubusercontent.com/vergecurrency/vergecurrency.com/master/static/img/verge-github-badge.png)](https://github.com/vergecurrency/vergecurrency.com)

[![Deploy Next.js site to Pages](https://github.com/vergecurrency/vergecurrency.com/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/vergecurrency/vergecurrency.com/actions/workflows/build-and-deploy.yml)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vergecurrency/vergecurrency.com/blob/master/CONTRIBUTING.md)

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

This repo currently targets Node `v20.11.1` and uses Yarn Classic (`yarn.lock`).

_Node.js and nvm:_

```
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20.11.1
nvm use 20.11.1
```

_Yarn:_

```
corepack enable
corepack prepare yarn@1.22.22 --activate
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

_If you have a different Node version installed, use Node Version Manager:_

[NVM instructions](https://github.com/nvm-sh/nvm)

_This repo includes `.nvmrc`, so the usual command is:_

```
nvm use
```

_Or install and switch explicitly:_

```
nvm install 20.11.1
nvm use 20.11.1
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

We're using the Next.js build system. To create the production export used for GitHub Pages, run:

```
yarn run build
```

This builds the site and exports the static output into `docs/`.

To run the site locally in development:

```
yarn run dev
```

Then open:

```
http://localhost:3000
```

GitHub Pages deployment is handled by the GitHub Actions workflow in `.github/workflows/build-and-deploy.yml`, which runs `yarn install --frozen-lockfile` and `yarn build` on pushes to `master`.

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
- - **JustinVforVendetta** - _Developer / Maintainer_ - [justinvforvendetta](https://github.com/justinvforvendetta)

See also the list of [contributors](CONTRIBUTING.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
