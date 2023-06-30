
const specificColorLog = (message) => {
    const black = () => {console.log('\x1b[30m' + message + '\x1b[37m')}
    const red = () => {console.log('\x1b[31m' + message + '\x1b[37m')}
    const green = () => {console.log('\x1b[32m' + message + '\x1b[37m')}
    const yellow = () => {console.log('\x1b[33m' + message + '\x1b[37m')}
    const blue = () => {console.log('\x1b[34m' + message + '\x1b[37m')}
    const magenta = () => {console.log('\x1b[35m' + message + '\x1b[37m')}
    const cyan = () => {console.log('\x1b[36m' + message + '\x1b[37m')}
    const white = () => {console.log('\x1b[37m' + message + '\x1b[37m')}


    return {
        black: black,
        red: red,
        green: green,
        yellow: yellow,
        blue: blue,
        magenta: magenta,
        cyan: cyan,
        white: white
    }
}

const specificBackgroundColorLog = (message) => {
    const black = () => {console.log('\x1b[40m' + message + '\x1b[40m')}
    const red = () => {console.log('\x1b[41m' + message + '\x1b[40m')}
    const green = () => {console.log('\x1b[42m' + message + '\x1b[40m')}
    const yellow = () => {console.log('\x1b[43m' + message + '\x1b[40m')}
    const blue = () => {console.log('\x1b[44m' + message + '\x1b[40m')}
    const magenta = () => {console.log('\x1b[45m' + message + '\x1b[40m')}
    const cyan = () => {console.log('\x1b[46m' + message + '\x1b[40m')}
    const white = () => {console.log('\x1b[47m' + message + '\x1b[40m')}


    return {
        black: black,
        red: red,
        green: green,
        yellow: yellow,
        blue: blue,
        magenta: magenta,
        cyan: cyan,
        white: white
    }
}

module.exports = {
    log: specificColorLog,
    background: specificBackgroundColorLog
}