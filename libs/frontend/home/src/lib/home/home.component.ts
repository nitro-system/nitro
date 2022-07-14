import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nitro-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Input() public welcomeMessage!: string;
}
