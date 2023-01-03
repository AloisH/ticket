export interface ActivatedDto {
  email: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface SetPasswordDto {
  email: string;
  password: string;
}

export interface SignupDto {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface TokenDto {
  accessToken: string;
  refreshToken: string;
}

export interface UserDto {
  id: number;
  email: string;
  role: string;
  permissionRole: string;
  firstName: string;
  lastName: string;
}
