# pretty-dev

[![npm version](https://badge.fury.io/js/pretty-dev.svg)](https://badge.fury.io/js/pretty-dev)
[![install size](https://packagephobia.com/badge?p=pretty-dev)](https://packagephobia.com/result?p=pretty-dev)

Pretty prints the log message to the console with customizable styles.

## Installation

You can install `pretty-dev` using npm:

```bash
npm install pretty-dev
```

## How to use

In your JavaScript code, import the necessary modules:

```javascript
const { Log, logStyle } = require('pretty-dev');
```

Create an instance of the `Log` class:

```javascript
const log = new Log();
```

Set the text of the log message using the `setText` method:

```javascript
log.setText('Message Text');
```

Apply styles to the log message using the `style` method and the predefined styles from `logStyle`:

```javascript
log.style(logStyle.red).style(logStyle.backgroundGreen);
```

Print the formatted log message to the console using the `print` method:

```javascript
log.print();
```

Retrieve the formatted log message as a string using the `text` method:

```javascript
const formattedText = log.text();
console.log(formattedText);
```

## Examples

Here are some examples of using the `pretty-dev` package:

```javascript
// Printing formatted log message
log.setText('Message Text').style(logStyle.red).style(logStyle.backgroundGreen).print();

// Printing a styled greeting message
console.log('Hello ' + log.setText('Matija').style(logStyle.red).style(logStyle.bold).text() + '. Nice to meet you!');

// Printing an error message with bold red text on yellow background
log.setText('Error: File not found').style(logStyle.red).style(logStyle.bold).style(logStyle.backgroundYellow).print();
```



## Styles

The `pretty-dev` package provides several predefined styles that you can apply to the log messages using the `style` method. Here are some of the available styles:

- `logStyle.black`: Sets the text color to black.
- `logStyle.red`: Sets the text color to red.
- `logStyle.green`: Sets the text color to green.
- `logStyle.yellow`: Sets the text color to yellow.
- `logStyle.blue`: Sets the text color to blue.
- `logStyle.magenta`: Sets the text color to magenta.
- `logStyle.cyan`: Sets the text color to cyan.
- `logStyle.white`: Sets the text color to white.
- `logStyle.backgroundBlack`: Sets the background color to black.
- `logStyle.backgroundRed`: Sets the background color to red.
- `logStyle.backgroundGreen`: Sets the background color to green.
- `logStyle.backgroundYellow`: Sets the background color to yellow.
- `logStyle.backgroundBlue`: Sets the background color to blue.
- `logStyle.backgroundMagenta`: Sets the background color to magenta.
- `logStyle.backgroundCyan`: Sets the background color to cyan.
- `logStyle.backgroundWhite`: Sets the background color to white.
- `logStyle.bold`: Makes the text bold.
- `logStyle.italic`: Makes the text italic.
- `logStyle.underline`: Underlines the text.

You can combine multiple styles by chaining the `style` method calls.
