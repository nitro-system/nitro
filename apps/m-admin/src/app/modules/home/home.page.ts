import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'm-admin-home',
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public welcomeMessage$ = new BehaviorSubject<string>('loading...');

  public constructor(homeService: HomeService) {
    homeService.getWelcomeMessage('admin-web').subscribe((message) => {
      this.welcomeMessage$.next(message);
    });
  }
}
