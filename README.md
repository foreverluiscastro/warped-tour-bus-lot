# Road Tripper App

This app uses a Rails API and React frontend. For ease of deployment, both projects are contained in the same repository. All the React Code is in the `/client` directory during development.

## Setup

To run this app you need to have the latest version of Ruby, Rails, Bundler, NPM and Postgres installed.

To run the app locally, install Rails and React dependencies and set up the database. This app uses Postgresql as a database.

```sh
bundle install
rails db:create db:migrate
npm install --prefix client
sudo service postgresql start
```
## Running the App locally

Click on the icon of a box split down the middle located in your terminal. This will create a Split terminal that will allow you to see the frontend and backend simultaniously. Run each command in it's own respective terminal to start the frontend and backend servers:

```sh
npm start --prefix client
```

```sh
rails s
```
