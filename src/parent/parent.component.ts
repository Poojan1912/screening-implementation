import { Component } from "@angular/core";
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    standalone: true,
    imports: [ChildComponent]
})
export class ParentComponent {
    user = {
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