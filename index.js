class Log{
    constructor(){
        this.messageText = '';
        this.prefix = '\x1b[';
    }

    setText(messageText){
        this.messageText = messageText;
        return this;
    }

    style = (style) => {
        switch(style){
            case textStyle.black:
                this.prefix += textStyle.black;
                break;
            case textStyle.red:
                this.prefix += textStyle.red;
                break;
            case textStyle.green:
                this.prefix += textStyle.green;
                break;
            case textStyle.yellow:
                this.prefix += textStyle.yellow;
                break;
            case textStyle.blue:
                this.prefix += textStyle.blue;
                break;
            case textStyle.magenta:
                this.prefix += textStyle.magenta;
                break;
            case textStyle.cyan:
                this.prefix += textStyle.cyan;
                break;
            case textStyle.white:
                this.prefix += textStyle.white;
                break;
            case textStyle.backgroundBlack:
                this.prefix += textStyle.backgroundBlack;
                break;
            case textStyle.backgroundRed:   
                this.prefix += textStyle.backgroundRed;
                break;
            case textStyle.backgroundGreen:
                this.prefix += textStyle.backgroundGreen;
                break;
            case textStyle.backgroundYellow:
                this.prefix += textStyle.backgroundYellow;
                break;
            case textStyle.backgroundBlue:
                this.prefix += textStyle.backgroundBlue;
                break;
            case textStyle.backgroundMagenta:
                this.prefix += textStyle.backgroundMagenta;
                break;
            case textStyle.backgroundCyan:
                this.prefix += textStyle.backgroundCyan;
                break;
            case textStyle.backgroundWhite:
                this.prefix += textStyle.backgroundWhite;
                break;
        }
        this.prefix += ';';
        return this;
    }


    print = () => {
        this.prefix = this.prefix.slice(0, -1);
        console.log(this.prefix + 'm' + this.messageText + '\x1b[0m');
    }

}

const textStyle = {
    black: '30',
    red: '31',
    green: '32',
    yellow: '33',
    blue: '34',
    magenta: '35',
    cyan: '36',
    white: '37',
    backgroundBlack: '40',
    backgroundRed: '41',
    backgroundGreen: '42',
    backgroundYellow: '43',
    backgroundBlue: '44',
    backgroundMagenta: '45',
    backgroundCyan: '46',
    backgroundWhite: '47'
}



module.exports = {
    Log: Log,
    logStyle: textStyle
}