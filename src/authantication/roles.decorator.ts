import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../users/users.entity';

export const Roles = (role: UserRole) => SetMetadata('role', role);
