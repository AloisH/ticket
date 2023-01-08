export interface UpdateUserModel {
  email?: string;
  passwordHash?: string;
  passwordSet?: boolean;
  permissionRole?: string;
  role?: string;
  refreshToken?: string;
  lastName?: string;
  firstName?: string;
}
