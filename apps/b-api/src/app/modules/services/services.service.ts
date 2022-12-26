import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { Service } from '@nitro/shared/interfaces';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ServicesService {
  private services: Service[] = [
    { id: '62c654e1-602c-466e-87c1-dc2b273c79a7', name: 'Fast' },
    { id: '32dd060b-8869-4346-961d-1877f94af14c', name: 'Rank' },
    { id: 'f8bd3ea3-f326-462f-883d-0672bfe44819', name: 'Money' },
    { id: 'cec9d908-e5eb-4b63-b82b-3b1910fb3265', name: 'Hero' },
  ];

  public create(createServiceDto: CreateServiceDto): Service {
    const service: Service = { id: randomUUID(), ...createServiceDto };

    this.services.unshift(service);

    return service;
  }

  public findAll(): Service[] {
    return this.services;
  }

  public findOne(id: string): Service {
    const service = this.services.find((s) => s.id === id);

    if (!service) {
      throw new NotFoundException();
    }

    return service;
  }

  public update(id: string, updateServiceDto: UpdateServiceDto): Service {
    const serviceIndex = this.services.findIndex((s) => s.id === id);

    if (serviceIndex === -1) {
      throw new NotFoundException();
    }

    const updatedService: Service = {
      ...this.services[serviceIndex],
      ...updateServiceDto,
      id: this.services[serviceIndex].id,
    };

    this.services[serviceIndex] = updatedService;

    return updatedService;
  }

  public remove(id: string): void {
    const serviceIndex = this.services.findIndex((s) => s.id === id);

    if (serviceIndex === -1) {
      throw new NotFoundException();
    }

    this.services.splice(serviceIndex, 1);
  }
}
