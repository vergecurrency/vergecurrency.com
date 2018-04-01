[![VergeCurrency](https://raw.githubusercontent.com/vergecurrency/vergecurrency.com/master/static/img/verge-github-badge.png)](https://github.com/vergecurrency/vergecurrency.com)
[![Build Status](https://travis-ci.com/StanFaas/vergecurrency.com-new.svg?token=92fFoYC7i7DYVecsmqGv&branch=master)](https://travis-ci.com/StanFaas/vergecurrency.com-new) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vergecurrency/vergecurrency.com)

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

_NodeJS:_
```
Download the windows installer here:
https://nodejs.org/en/download/
```

_Yarn:_
```
Download the windows installer here:
https://yarnpkg.com/lang/en/docs/install/
```

### Linux:

_NodeJS:_

*Tip:* You need **Ruby**, **GCC** and **Homebrew** before installing NodeJS.

```
brew install node
```

_Yarn:_

```
brew install yarn
```

## Installing

Use your favorite terminal to get up and running by following the next steps:

_Clone the project into a directory on your machine:_

```
git clone https://github.com/StanFaas/vergecurrency.com-new.git
```

_Cd into the newly created directory:_

```
cd vergecurrency.com-new
```

_Install dependencies:_

```
yarn
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

## Built With

* [NextJS](https://github.com/zeit/next.js/) - The SSR framework used
* [i18next](https://www.i18next.com/) - Used for translations
* [ESLint](https://eslint.org/) - Used for JavaScript linting
* [sass-lint](https://github.com/sasstools/sass-lint) - Used for SCSS linting
* [postcss-loader](https://github.com/postcss/postcss-loader) - Used for transforming styles with Webpack.
* [autoprefixer](https://github.com/postcss/autoprefixer) - Used to parse CSS and add vendor prefixes to rules by Can I use.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Stan Faas** - *Main developer* - [StanFaas](https://github.com/StanFaas)
* **Edwin de Boer** - *Main developer* - [EdwinB89](https://github.com/EdwinB89)
* **Waveon3** - *Webdesigns* - [Waveon3](https://reddit.com/user/waveon3)

See also the list of [contributors](CONTRIBUTING.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
