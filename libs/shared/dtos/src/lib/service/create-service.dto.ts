import { Service } from '@nitro/shared/interfaces';

export interface CreateServiceDto extends Pick<Service, 'name'> {}
