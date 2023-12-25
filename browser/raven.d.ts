
declare class Raven {
    static config(dsn: string, options?: any): void;
    static install(): void;
    static setUserContext(user: any): void;
    static captureException(exception: any): void;
    static captureMessage(message: string): void;
    static showReportDialog(options?: any): void;
}

