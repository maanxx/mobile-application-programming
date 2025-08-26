class Logger {
  private static instance: Logger;

   private constructor (){ };

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }


  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  public error(message: string): void {
    console.log(`[ERROR]: ${message}`)
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Loi 1");
logger2.error("Loi 2");