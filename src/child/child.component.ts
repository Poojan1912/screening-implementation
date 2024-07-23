import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../models/user.model";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    @Input() user: User = {
        firstName: "",
        lastName: ""
    };

    update() {
        this.user.firstName = "Mark";
    }
}