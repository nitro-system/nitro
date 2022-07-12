import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';
import { ServicesService } from './services.service';

@Controller({ path: 'services', version: '1' })
export class ServicesController {
  public constructor(private readonly servicesService: ServicesService) {}

  @Post()
  public create(@Body() createServiceDto: CreateServiceDto): IService {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  public findAll(): IService[] {
    return this.servicesService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): IService {
    return this.servicesService.findOne(id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto
  ): IService {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): void {
    return this.servicesService.remove(id);
  }
}
