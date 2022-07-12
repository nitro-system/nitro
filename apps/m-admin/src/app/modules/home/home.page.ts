import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@nitro/api-interfaces';

@Component({
  selector: 'm-admin-home',
  templateUrl: './home.page.html',
})
export class HomePage {
  public hello$ = this.http.get<Message>('/api/hello');

  public title = 'Admin App';

  public constructor(private http: HttpClient) {}
}
