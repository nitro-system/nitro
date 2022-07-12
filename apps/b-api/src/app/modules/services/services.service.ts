import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';

@Injectable()
export class ServicesService {
  private services: IService[] = [
    { id: '1231', name: 'Bank' },
    { id: '5765', name: 'Home' },
    { id: '5157', name: 'School' },
  ];

  public create(createServiceDto: CreateServiceDto): IService {
    const service: IService = {
      id: (Math.random() + 1).toString(36).substring(7),
      ...createServiceDto,
    };

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
