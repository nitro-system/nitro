import { Controller, Get, Param } from '@nestjs/common';
import { AppEnvironment, Welcome } from '@nitro/shared/interfaces';
import { HomeService } from './home.service';

@Controller({ path: 'home', version: '1' })
export class HomeController {
  public constructor(private readonly homeService: HomeService) {}

  @Get()
  public env(): AppEnvironment {
    return this.homeService.env();
  }

  @Get('welcome/:project')
  public getWelcomeMessage(@Param('project') project: string): Welcome {
    return this.homeService.getWelcomeMessage(project);
  }
}
