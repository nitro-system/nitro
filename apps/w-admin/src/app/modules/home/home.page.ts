import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'w-admin-home',
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {
  public title = 'Admin Web';

  public welcomeMessage = 'Loading...';

  public constructor(private readonly homeService: HomeService) {}

  public ngOnInit(): void {
    this.getWelcomeMessage();
  }

  private getWelcomeMessage(): void {
    this.homeService.getWelcomeMessage(this.title).subscribe((message) => {
      this.welcomeMessage = message;
    });
  }
}