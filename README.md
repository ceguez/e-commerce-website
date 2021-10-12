# E-commerce App: Firebase & React Programming
This is a prototype for an e-commerce app. It integrates Firebase for the back-end (service &amp; database), and the Stripe API for processing online payments. The front-end implements reactive programming concepts and techniques.  

**Check out the prototype on heroku: https://triangle-ecommerce.herokuapp.com/**
**Note:** Free trial for the Firebase database will expire soon so DB might stop working. 

## Features
* Users can create accounts.
* Users can login/logout into/from their accounts.
* Users can add/delete/edit items to/from the shopping cart.
* Users can checkout and make a payment with a credit card (curretnly on test credit card number).

## Tech stack
* Firebase  for authentication and storage.
* Create-react-app with the PWA (progressive web app) template which adds the service-worker.js file.
  Note: This version of the prototype is not  PWA but it can be implemented in the future.
* JavaScript XML(JSX) to build out the components for the application in a modular fashion.
* Yarn (package manager)
* Redux (State management) 
* React Router to set up routes.
* Axios to fetch data from server.
* Node-SASS to write robust and maintainable CSS.
* Stripe API to process online payments.
* Deployed on Heroku (PaaS).

## Development In progress:
  - Replacing Redux (current state management) with Apollo to enable managing data with GraphQL.
  - Integrating authentication/authorization using Spring Security and Jason Web Token.
  - Defining requirements to source data from a third party database.

## Pictures of Demo


 
