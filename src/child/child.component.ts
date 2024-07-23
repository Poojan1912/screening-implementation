import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../models/user.model";
import { LoggerService } from "../services/logger.service";
import { ChildLoggerService } from "../services/child-logger.service";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    standalone: true,
    providers: [{ provide: LoggerService, useClass: ChildLoggerService }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    @Input() user: User = {
        firstName: "",
        lastName: ""
    };

    constructor(private loggerService: LoggerService) { }

    update() {
        this.user.firstName = "Mark";
        this.loggerService.log("First Name updated from the child");
    }
}