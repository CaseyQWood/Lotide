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
* `function3(map)`: acts as a replacement to the .map method
* `function3(letterPossitions)`: returns a object with the list on indexes each letter of the string is found on 
* `function3(flatten)`: turns any nested arrays into a single non nested array 
* `function3(findKeyByValue)`: finds the key of a object by giving the function the value of the intended key
* `function3(findKey)`: returns the value of inputed key 
* `function3(eqObjects)`: checks if two objects are equal with recursion
* `function3(eqArrays)`: checks if arrays are equal with recursion
* `function3(countOnly)`: returns the amount of counts the a inputed value is found 
* `function3(countLetters)`: takes a string and returns a object that lists the number of times each letter is present
