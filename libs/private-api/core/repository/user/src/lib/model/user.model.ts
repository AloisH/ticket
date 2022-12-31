export interface UserModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  email: string;
  role: string;
  permissionRole: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
}
