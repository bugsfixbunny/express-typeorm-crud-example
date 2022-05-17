# Express-Typeorm-crud example

This is an simpe crud example of Express + Typeorm + MySQL

## Description

You can create, update, delete a car and get list of cars.

## Resources

  - MySQL
  - TypeORM
  - TypeScript
  - Node.js
  - Express
  - routing-controllers
  - vin-decode

- [TypeORM documentation](https://github.com/typeorm/typeorm)

- [routing-controllers documentation](https://github.com/typestack/routing-controllers)

- [Random VIN generator](https://vingenerator.org/)

- [National Highway Traffic Safety Administration (NHTSA) API](https://vpic.nhtsa.dot.gov/api/) for decoding a VIN

## Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

## Getting Started

To bring up the environment, perform the following steps:

1. Bring up the MySQL database

    ```bash
    # In the project root directory
    docker compose up
    # Exposes database on port 3306
    ```

2. Bring up express server in development mode

    ```bash
    # In a separate terminal session
    yarn dev
    # Exposes express app on port 8889
    ```
