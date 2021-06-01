# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @casey252/lotide`

**Require it:**

`const _ = require('@casey252/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(middle)`: this function will return the value of the middle index if length is odd and the middle two values if odd
* `function2(head)`: will return just the first index of a array 
* `function3(tail)`: will return all index except the first