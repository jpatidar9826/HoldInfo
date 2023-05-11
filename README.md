# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This React SPA Fetch data from backend on load and map it in the table. 
The backend fetch data every time frontend calls, from (https://api.wazirx.com/api/v2/tickers) convert them to array then slice top 10 data store the name, last, buy, Sell, volume, base_unit of all top 10 results in the MongoDB database. Then retreve the most recent object from the Schema and send it as response to the frontend. 

The frontend tech stack - React, HTML, CSS, JavaScript
The Backend tech stack - NodeJs, Express, MongoDB, REST API.