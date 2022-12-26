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
import { Service } from '@nitro/shared/interfaces';
import { ServicesService } from './services.service';

@Controller({ path: 'services', version: '1' })
export class ServicesController {
  public constructor(private readonly servicesService: ServicesService) {}

  @Post()
  public create(@Body() createServiceDto: CreateServiceDto): Service {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  public findAll(): Service[] {
    return this.servicesService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Service {
    return this.servicesService.findOne(id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto
  ): Service {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): void {
    return this.servicesService.remove(id);
  }
}
