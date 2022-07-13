import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ServicesService {
  private services: IService[] = [
    { id: '62c654e1-602c-466e-87c1-dc2b273c79a7', name: 'Fast' },
    { id: '32dd060b-8869-4346-961d-1877f94af14c', name: 'Rank' },
    { id: 'f8bd3ea3-f326-462f-883d-0672bfe44819', name: 'Money' },
    { id: 'cec9d908-e5eb-4b63-b82b-3b1910fb3265', name: 'Hero' },
  ];

  public create(createServiceDto: CreateServiceDto): IService {
    const service: IService = { id: randomUUID(), ...createServiceDto };

    this.services.unshift(service);

    return service;
  }

  public findAll(): IService[] {
    return this.services;
  }

  public findOne(id: string): IService {
    const service = this.services.find((s) => s.id === id);

    if (!service) {
      throw new NotFoundException();
    }

    return service;
  }

  public update(id: string, updateServiceDto: UpdateServiceDto): IService {
    const serviceIdx = this.services.findIndex((s) => s.id === id);

    if (serviceIdx === -1) {
      throw new NotFoundException();
    }

    const updatedService: IService = {
      ...this.services[serviceIdx],
      ...updateServiceDto,
      id: this.services[serviceIdx].id,
    };

    this.services[serviceIdx] = updatedService;

    return updatedService;
  }

  public remove(id: string): void {
    const serviceIdx = this.services.findIndex((s) => s.id === id);

    if (serviceIdx === -1) {
      throw new NotFoundException();
    }

    this.services.splice(serviceIdx, 1);
  }
}
