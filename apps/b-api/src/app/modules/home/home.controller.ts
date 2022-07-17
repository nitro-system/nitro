import { Controller, Get, Param } from '@nestjs/common';
import { IAppEnvironment, IWelcome } from '@nitro/shared/interfaces';
import { HomeService } from './home.service';

@Controller({ path: 'home', version: '1' })
export class HomeController {
  public constructor(private readonly homeService: HomeService) {}

  @Get()
  public env(): IAppEnvironment {
    return this.homeService.env();
  }

  @Get('welcome/:project')
  public getWelcomeMessage(@Param('project') project: string): IWelcome {
    return this.homeService.getWelcomeMessage(project);
  }
}
