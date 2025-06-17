export type TUserRole = 'customer' | 'admin';
export type TUserStatus = 'active' | 'inactive';

export interface IUser {
  name: string
  email: string
  password: string
  photo?: string | null
  role: TUserRole
  userStatus: TUserStatus
}

