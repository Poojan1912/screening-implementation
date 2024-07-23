import { Component } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { User } from "../models/user.model";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    standalone: true,
    imports: [ChildComponent]
})
export class ParentComponent {
    user: User = {
        firstName: 'John',
        lastName: 'Doe'
    };

    updateFirstName() {
        this.user.firstName = 'Max';
    }

    updateLastName() {
        this.user = {
            ...this.user,
            lastName: 'Smith'
        }
    }
}