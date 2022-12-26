import { Injectable } from '@nestjs/common';
import { AppEnvironment, Welcome } from '@nitro/shared/interfaces';
import { environment } from '../../../environments/environment';

@Injectable()
export class HomeService {
  private welcomeMessage = 'Welcome To Our';

  public env(): AppEnvironment {
    return {
      environment: environment.name,
      production: environment.production,
      version: environment.version.full,
    };
  }

  public getWelcomeMessage(project: string): Welcome {
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
