import { IService } from '@nitro/shared/interfaces';

export interface CreateServiceDto extends Pick<IService, 'name'> {}
