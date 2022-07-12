import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {
  public constructor(private http: HttpClient) {}

  public list(): Observable<IService[]> {
    return this.http.get<IService[]>('/api/v1/services');
  }

  public get(id: string): Observable<IService> {
    return this.http.get<IService>(`/api/v1/services/${id}`);
  }

  public create(createServiceDto: CreateServiceDto): Observable<IService> {
    return this.http.post<IService>('/api/v1/services', createServiceDto);
  }

  public update(
    id: string,
    updateServiceDto: UpdateServiceDto
  ): Observable<IService> {
    return this.http.post<IService>(`/api/v1/services/${id}`, updateServiceDto);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/v1/services/${id}`);
  }
}
