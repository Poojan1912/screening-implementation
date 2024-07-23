import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    @Input() user: any;

    update() {
        this.user.firstName = "Mark";
    }
}