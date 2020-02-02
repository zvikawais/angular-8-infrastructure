import { EnvironmentConfig } from '../app/models/environment-config.model';
import { EnvironmentType } from '../app/models/enums';

export const environment: EnvironmentConfig = {
    apiBaseUrl: '',
    environmentType: EnvironmentType.Test
};
