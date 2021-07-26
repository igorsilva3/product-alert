<!-- Header -->
<h1 align="center">PRODUCT ALERT</h1>
<p align="center">
  	<img alt="Repository size" src="https://img.shields.io/github/repo-size/igorsilva3/product-alert">
  	<a href="https://github.com/igorsilva3/product-alert/commits/main">
    	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/igorsilva3/product-alert">
  	</a> 
  	<img alt="License" src="https://img.shields.io/github/license/igorsilva3/product-alert">
  	<a href="https://github.com/igorsilva3/product-alert/stargazers">
    	<img alt="Stargazers" src="https://img.shields.io/github/stars/igorsilva3/product-alert">
  	</a>
</p>

<!-- Description  -->
> *The product alert aims to facilitate the delivery of a report on products close to their expiration date, speeding up the product sales process, and possibly without having an economic loss. :stars:*

<!-- Table of contents -->
## :pushpin: Table of Contents
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [How to run](#how-to-run)
- [License](#license)

<!-- Technologies -->
## Technologies
* [NodeJS](https://nodejs.org/en/) 
* [Typescript](https://www.typescriptlang.org/)
* [Postgresql](https://www.postgresql.org/)
* [Prisma](https://www.prisma.io/)
* [Jest](https://jestjs.io/)
* [Yarn](https://yarnpkg.com/)

<!-- Prerequisites -->
## Prerequisites
* NodeJS v14.17.3++ installed in your machine
* Postgresql installed in your machine
* Git installed in your machine
* Yarn installed in your machine

- #### Cloning this repository
  ```bash
  $ git clone https://github.com/igorsilva3/product-alert.git
  $ cd product-alert/
  ```

- #### Creation of variables environment
	```bash
	# Creation of .env file for development environment
	$ touch .env.development
	```
  Now, add your database settings by following this tutorial: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres/

- #### Installing dependencies
	```bash
	# Enter in folder backend
  $ cd backend/
  $ yarn install
	```

- #### Migrating database
    ```bash
    # Migrating for database
    $ yarn prisma migrate deploy
    ``` 

## How to run
```bash
# Running the application
$ yarn start
```

<!-- License -->
## License

Released in 2020 :closed_book: License.

Made with :heart: by [Igor Silva](https://github.com/igorsilva3).
This project is under the [MIT license](./LICENSE).

Give a :star: if this project helped you!
