import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWelcome } from '@nitro/shared/interfaces';
import { map, Observable } from 'rxjs';

@Injectable()
export class HomeService {
  public constructor(private http: HttpClient) {}

  public getWelcomeMessage(project: string): Observable<string> {
    return this.http
      .get<IWelcome>(`/api/v1/home/welcome/${project.replace(' ', '-')}`)
      .pipe(map((res) => res.message));
  }
}
