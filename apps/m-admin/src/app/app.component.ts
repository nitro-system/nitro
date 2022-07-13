import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'm-admin-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
