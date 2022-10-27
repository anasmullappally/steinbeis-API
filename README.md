# EXCHANGE API

- [Introduction](#introduction)
- [Install](#Install)
- [Run](#Run)
- [License](#license)

## Introduction

Let the user enter the currency code of the country for which they wish to view exchange rate against the Indian Rupee and display the data for bitcoin .

This api made up with Exchange Rate API and WazirX API

## Install

To install dependencies run 'npm install' on the terminal

## Run

To run this application, you have to set your own environmental variables for specified PORT

PORT : Specify the port Number (otherwise it will run 5000)

After you've set these environmental variables in the .env file at the root of the project,
Now you can run `npm start` in the terminal and the application should work.

## sample api requests

- for getting the rate with respect to the indian rupee

1. http://localhost:5000/api/currencyRate/?currencyCode=AED

sample output

{
    
    "rate": 0.135413,
    "currencyCode": "MAD"
}

- for bitcoin data based on user provided currency code

1. http://localhost:5000/api/getData/?currencyCode=AED

- sample output

{

    "symbol": "btcinr",
    "baseAsset": "btc",
    "quoteAsset": "AED",
    "openPrice": 77962.497944,
    "lowPrice": 77961.91566099999,
    "highPrice": 80024.093301,
    "lastPrice": 78384.20520899999,
    "volume": "7.08729",
    "bidPrice": 78384.20520899999,
    "askPrice": 78429.041,
    "at": 1666869033000

}

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [ANAS MULLAPPALLY](https://github.com/anasmullappally)
