import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'w-admin-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
