import { Component } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { User } from "../models/user.model";
import { LoggerService } from "../services/logger.service";
import { ParentLoggerService } from "../services/parent-logger.service";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    standalone: true,
    imports: [ChildComponent],
    providers: [{ provide: LoggerService, useClass: ParentLoggerService }]
})
export class ParentComponent {
    user: User = {
        firstName: 'John',
        lastName: 'Doe'
    };

    constructor(private loggerService: LoggerService) { }

    updateFirstName() {
        this.user.firstName = 'Max';
        this.loggerService.log("first name changed!");
    }

    updateLastName() {
        this.user = {
            ...this.user,
            lastName: 'Smith'
        }

        this.loggerService.log("last name changed with the change in the object reference!");
    }
}