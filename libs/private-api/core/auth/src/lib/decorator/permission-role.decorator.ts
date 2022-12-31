import { SetMetadata } from '@nestjs/common';

export const PERMISSION_ROLE_KEY = 'PERMISSION_ROLE_KEY';
export const Role = (...roles: string[]) => SetMetadata(PERMISSION_ROLE_KEY, roles);
