import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '@nitro/shared/interfaces';
import { map, Observable } from 'rxjs';

@Injectable()
export class HomeService {
  public constructor(private http: HttpClient) {}

  public getWelcomeMessage(project: string): Observable<string> {
    return this.http
      .get<Welcome>(`/api/v1/home/welcome/${project}`)
      .pipe(map((response) => response.message));
  }
}
