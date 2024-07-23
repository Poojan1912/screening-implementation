import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class ChildLoggerService extends LoggerService {
    override log(message: string) {
        console.log("Child Logger: ", message);
    }
}