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

## Running the App in Development

In development, requests from the React app are
[proxied][create-react-app proxy], so you can write something like this (without
using a domain):

```js
fetch("/me").then((r) => r.json());
```

Since our deployed app will run on the same domain, this is a good way to
simulate a similar environment in development.

## Code Explanations

There are a few areas of the code that differ from the typical Rails API
setup that merit explanation.

### Cookies/Sessions Setup

By default, when generating a new Rails app in API mode, the middleware for
cookies and sessions isn't included. We can add it back in (and specify the
`SameSite` policy for our cookies for protection):

```rb
# config/application.rb

# Adding back cookies and session middleware
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore

# Use SameSite=Strict for all cookies to help protect against CSRF
config.action_dispatch.cookies_same_site_protection = :strict
```

We also need to include helpers for sessions/cookies in our controllers:

```rb
# app/controllers/application_controller.rb

class ApplicationController < ActionController::API
  include ActionController::Cookies
end
```

Now, we can set a session cookie for users when they log in:

```rb
def create
  user = User.find_by(username: params[:username]).authenticate(params[:password])
  session[:user_id] = user.id
  render json: user
end
```
