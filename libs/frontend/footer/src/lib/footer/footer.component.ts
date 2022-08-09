import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nitro-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() public env!: {
    name: string;
    production: boolean;
    backendUrl: string;
    version: { full: string };
  };
}
