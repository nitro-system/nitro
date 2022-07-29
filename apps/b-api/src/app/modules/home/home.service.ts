import { Injectable } from '@nestjs/common';
import { IAppEnvironment, IWelcome } from '@nitro/shared/interfaces';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class HomeService {
  private welcomeMessage = 'Welcome To Our';

  public env(): IAppEnvironment {
    return {
      environment: environment.name,
      production: environment.production,
      version: `${environment.version.full}-updated`,
    };
  }

  public getWelcomeMessage(project: string): IWelcome {
    const titleCaseProject = project
      .replace('-', ' ')
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');

    return {
      message: `${this.welcomeMessage} ${titleCaseProject}!`,
    };
  }
}
