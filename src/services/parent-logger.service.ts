import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class ParentLoggerService extends LoggerService {
    override log(message: string) {
        console.log("Parent Logger: ", message);
    }
}