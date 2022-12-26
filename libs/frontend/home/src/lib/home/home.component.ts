import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  fadeInDownOnEnterAnimation,
  fadeInOnEnterAnimation,
} from 'angular-animations';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'nitro-frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInOnEnterAnimation({ anchor: 'pFadeInOnEnter', delay: 500 }),
    fadeInOnEnterAnimation({ anchor: 'bFadeInOnEnter', delay: 1000 }),
  ],
})
export class HomeComponent {
  @Input()
  public set project(project: string) {
    this.homeService.getWelcomeMessage(project).subscribe((message) => {
      this.welcomeMessage$.next(message);
    });
  }

  public welcomeMessage$ = new BehaviorSubject<string>('loading...');

  public constructor(private readonly homeService: HomeService) {}
}
