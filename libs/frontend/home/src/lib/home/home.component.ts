import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'nitro-frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Input()
  public set project(project: string) {
    this.homeService.getWelcomeMessage(project).subscribe((msg) => {
      this.welcomeMessage$.next(msg);
    });
  }

  public welcomeMessage$ = new BehaviorSubject<string>('loading...');

  public constructor(private readonly homeService: HomeService) {}
}
