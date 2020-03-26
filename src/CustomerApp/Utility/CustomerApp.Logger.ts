//Browser Console

//Email

//Database

export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {
    }

}

export class ConsoleLogger extends BaseLogger {

}

export class DbLogger extends BaseLogger {


}

export class FileLogger extends BaseLogger {

}

