export interface CreateUserModel {
  email: string;
  role: string;
  permissionRole: string;
  firstName: string;
  lastName: string;
  passwordSet: boolean;
}
