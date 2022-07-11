import { Injectable } from '@nestjs/common';
import { Message } from '@nitro/api-interfaces';

@Injectable()
export class AppService {
  private message = 'Welcome to api!';

  public getData(): Message {
    return { message: this.message };
  }
}
