# pretty-dev

Pretty prints the log message to the console.

# How to Use?
    const {Log, logStyle} = require('./package/index');

    const log = new Log();

    log.setText('Message Text').style(logStyle.red).style(logStyle.backgroundGreen).print();
