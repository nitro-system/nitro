import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'w-admin-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  public welcomeMessage$ = new BehaviorSubject<string>('loading...');

  public constructor(homeService: HomeService) {
    homeService.getWelcomeMessage('admin-web').subscribe((message) => {
      this.welcomeMessage$.next(message);
    });
  }
}
