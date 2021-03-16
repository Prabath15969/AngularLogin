import { Role } from './role.enum';

export class User {
  id?: number;
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  roleName?: Role;
  token?: string;
}
