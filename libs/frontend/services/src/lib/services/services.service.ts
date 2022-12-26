import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { Service } from '@nitro/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {
  public constructor(private http: HttpClient) {}

  public list(): Observable<Service[]> {
    return this.http.get<Service[]>('/api/v1/services');
  }

  public get(id: string): Observable<Service> {
    return this.http.get<Service>(`/api/v1/services/${id}`);
  }

  public create(createServiceDto: CreateServiceDto): Observable<Service> {
    return this.http.post<Service>('/api/v1/services', createServiceDto);
  }

  public update(
    id: string,
    updateServiceDto: UpdateServiceDto
  ): Observable<Service> {
    return this.http.post<Service>(`/api/v1/services/${id}`, updateServiceDto);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/v1/services/${id}`);
  }
}
