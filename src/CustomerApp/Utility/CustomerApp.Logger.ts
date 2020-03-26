export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {
    }
}

export class ConsoleLogger extends BaseLogger {
    Log() {
        console.log('Using console logger!!!!');
    }
}

export class DbLogger extends BaseLogger {
    Log() {
        console.log('Using database logger!!!!');
    }
}

export class FileLogger extends BaseLogger {
    Log() {
        console.log('Using file logger!!!!');
    }
}

