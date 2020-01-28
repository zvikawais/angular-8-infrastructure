import { EnvironmentType } from './enums';

export interface EnvironmentConfig {
    environmentType: EnvironmentType;
    apiBaseUrl: string;
}
