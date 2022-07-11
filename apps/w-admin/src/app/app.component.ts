import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nitro/api-interfaces';

@Component({
  selector: 'w-admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
