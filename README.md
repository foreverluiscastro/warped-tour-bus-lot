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

### Using Styled Components

To use styled components, you must include it in your dependencies in your `package.json` before you run bundle install. Once you have the dependency installed, you can define the component in the js file like:

```js
// src/pages/Home.js

// import styled components
import styled from 'styled-components'

// Define the component
const Wrapper = styled.section`
add your css here!
`;
```

but if you have a component that you will reuse throughout development, define a new `.js` file in `/styles` and import and export it in the `index.js` file in the same directory. For example, I created a component called `Button` that I reuse in the home page. The process to use this button goes as follows:

```js
// Define the component in /styles

// src/styles/Button.js

// remeber to import styled components to be able to style using css
import styled from "styled-components";

function Button() {
    // all of the logic of the button here
    return <Component />;
}

// all your css styling goes here
const StyleExample = styled.section`

`;

// don't forget to export
export default Button;
```

then, you will import and export the component in the `index.js` file in the `/styles` directory.

```js
// src/styles/index.js

// import the component
import Button from './Button';

//export the component
export { Button };
```

This will allow you to use this component anywhere in your app by simply import the componments `from '../styles'`.

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
